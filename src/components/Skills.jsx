import SectionHeader from './SectionHeader'
import { learning, skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="flex flex-col gap-4">
      <SectionHeader title="Skills" description="Tools I use to ship." />
      <div className="grid gap-3 sm:grid-cols-2">
        {skills.map(({ icon: Icon, title, description, meta }) => (
          <div
            key={title}
            className="flex flex-col gap-2 border border-zinc-200 p-4 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
          >
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 shrink-0 text-lg text-foreground">
                <Icon />
              </span>
              <h3 className="font-medium text-foreground">{title}</h3>
            </div>
            <p className="text-sm leading-6 text-zinc-600">{description}</p>
            <span className="mt-1 font-mono text-xs text-zinc-400">{meta}</span>
          </div>
        ))}
      </div>

      <div className="mt-2 flex flex-col gap-3">
        <h3 className="font-mono text-sm uppercase tracking-wider text-zinc-500">Currently learning</h3>
        {learning.map(({ icon: Icon, title, description, since }) => (
          <div
            key={title}
            className="flex flex-col gap-3 border border-zinc-300 bg-zinc-50 p-5 transition-colors hover:border-foreground hover:bg-zinc-100"
          >
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-widest text-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
              </span>
              Learning
            </span>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 shrink-0 text-lg text-foreground">
                  <Icon />
                </span>
                <h4 className="text-base font-semibold tracking-tight text-foreground">{title}</h4>
              </div>
              <p className="text-sm leading-6 text-zinc-600">{description}</p>
            </div>
            <div className="mt-auto border-t border-zinc-200 pt-3 font-mono text-xs text-zinc-500">
              {since}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
