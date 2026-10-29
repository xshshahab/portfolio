import { LuCalendar } from 'react-icons/lu'
import SectionHeader, { Arrow } from './SectionHeader'
import { companies } from '../data'

const BADGES = { current: 'Current', past: 'Past', personal: 'Personal' }

function Badge({ status }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-widest text-foreground">
      <span className="relative flex h-2 w-2">
        {status === 'current' && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60" />
        )}
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${status === 'current' ? 'bg-foreground' : 'border border-zinc-400'}`}
        />
      </span>
      {BADGES[status]}
    </span>
  )
}

function ProjectCard({ project: p }) {
  return (
    <div
      className={`group relative flex flex-col gap-2 border border-zinc-200 p-4 transition-colors ${p.href ? 'hover:border-zinc-400 hover:bg-zinc-50' : ''}`}
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-medium text-foreground">
          {p.href ? (
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="after:absolute after:inset-0"
            >
              {p.name}
            </a>
          ) : (
            p.name
          )}
        </h4>
        {p.href && <Arrow />}
      </div>
      <p className="text-sm leading-6 text-zinc-600">{p.description}</p>
      <p className="font-mono text-xs leading-5 text-zinc-500">{p.tech.join(' · ')}</p>
      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-zinc-400">
        <span>{p.date}</span>
        {p.domain && <span>{p.domain}</span>}
        {p.secondaryHref && (
          <a
            href={p.secondaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 underline decoration-zinc-300 underline-offset-2 hover:text-foreground"
          >
            {p.secondaryLabel}
          </a>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col gap-6">
      <SectionHeader title="Experience" description="Projects I've built, company by company." />
      {companies.map((c) => (
        <div key={c.company} className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 border border-zinc-300 bg-zinc-50 p-5">
            <Badge status={c.status} />
            <div className="flex flex-col gap-1.5">
              <h3 className="text-base font-semibold tracking-tight text-foreground">{c.company}</h3>
              <p className="font-mono text-xs text-zinc-500">{c.role}</p>
            </div>
            <div className="mt-auto flex items-center justify-between gap-2 border-t border-zinc-200 pt-3 font-mono text-xs text-zinc-500">
              <span className="flex items-center gap-2">
                {c.period && (
                  <>
                    <LuCalendar size={13} />
                    {c.period}
                  </>
                )}
              </span>
              <span>
                {c.projects.length} {c.projects.length === 1 ? 'project' : 'projects'}
              </span>
            </div>
          </div>
          <div className="ml-[3px] flex flex-col gap-3 border-l border-zinc-200 pl-4">
            {c.projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
