import { useEffect } from 'react'
import SectionHeader from '../components/SectionHeader'
import Updates from '../components/Updates'
import { currentlyLearning, profile } from '../data'

export default function New() {
  useEffect(() => {
    document.title = `What's new — ${profile.name}`
    return () => {
      document.title = `${profile.name} — Full Stack Developer`
    }
  }, [])

  return (
    <>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <h1 className="font-mono text-sm uppercase tracking-wider text-zinc-500">New</h1>
          <p className="text-2xl font-semibold tracking-tight text-foreground">What's new</p>
          <p className="leading-7 text-zinc-600">What I'm learning and shipping lately.</p>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <SectionHeader title="Currently learning" />
        <div className="flex flex-col gap-3 border border-zinc-300 bg-zinc-50 p-5">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-widest text-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
            </span>
            Live
          </span>
          <div className="flex flex-col gap-1.5">
            <h2 className="text-base font-semibold tracking-tight text-foreground">
              {currentlyLearning.title}
            </h2>
            <p className="text-sm leading-6 text-zinc-600">{currentlyLearning.description}</p>
          </div>
          <div className="mt-auto border-t border-zinc-200 pt-3 font-mono text-xs text-zinc-500">
            {currentlyLearning.since}
          </div>
        </div>
      </section>

      <Updates title="Timeline" />
    </>
  )
}
