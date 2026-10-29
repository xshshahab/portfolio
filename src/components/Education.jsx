import SectionHeader from './SectionHeader'
import { education } from '../data'

export default function Education() {
  return (
    <section className="flex flex-col gap-4">
      <SectionHeader title="Education" />
      <div className="flex flex-col gap-2 border border-zinc-200 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-medium text-foreground">{education.degree}</h3>
          <span className="shrink-0 font-mono text-xs text-zinc-400">{education.years}</span>
        </div>
        <p className="text-sm leading-6 text-zinc-600">{education.school}</p>
        <span className="mt-1 font-mono text-xs text-zinc-400">
          {education.detail} · Languages: {education.languages}
        </span>
      </div>
    </section>
  )
}
