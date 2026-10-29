import { useState } from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  const toggle = () => {
    const next = !dark
    document.documentElement.classList.toggle('dark', next)
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', next ? '#09090b' : '#ffffff')
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {
      // storage unavailable; theme just won't persist
    }
    setDark(next)
  }

  const label = dark ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="cursor-pointer hover:text-foreground"
    >
      {dark ? <LuSun size={15} /> : <LuMoon size={15} />}
    </button>
  )
}
