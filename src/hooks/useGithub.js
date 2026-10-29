import { useEffect, useState } from 'react'
import { GITHUB_USER } from '../data'

const initial = { status: 'loading', profile: null, days: [] }

export function useGithub() {
  const [state, setState] = useState(initial)

  useEffect(() => {
    const ctrl = new AbortController()
    const get = (url) =>
      fetch(url, { signal: ctrl.signal }).then((r) => {
        if (!r.ok) throw new Error(r.statusText)
        return r.json()
      })

    Promise.allSettled([
      get(`https://api.github.com/users/${GITHUB_USER}`),
      get(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`),
    ]).then(([user, contrib]) => {
      if (ctrl.signal.aborted) return
      setState({
        status: 'done',
        profile: user.status === 'fulfilled' ? user.value : null,
        days: contrib.status === 'fulfilled' ? contrib.value.contributions : [],
      })
    })

    return () => ctrl.abort()
  }, [])

  return state
}
