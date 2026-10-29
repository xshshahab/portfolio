import SectionHeader, { Arrow } from './SectionHeader'
import { updates } from '../data'

function Row({ item }) {
  const body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="text-sm font-medium text-foreground">{item.title}</span>
        {item.href && <Arrow />}
      </div>
      <span className="text-sm leading-6 text-zinc-600">{item.summary}</span>
      <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
        {item.date} · {item.tag}
      </span>
    </>
  )
  const cls = 'group flex flex-col gap-1 border-b border-zinc-200 px-2 py-3'

  return item.href ? (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cls} transition-colors hover:bg-zinc-50`}
    >
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  )
}

export default function Updates({ limit, title = "What's new" }) {
  const items = limit ? updates.slice(0, limit) : updates

  return (
    <section className="flex flex-col gap-4">
      <SectionHeader title={title} to={limit ? '/new' : undefined} />
      <div className="flex flex-col">
        {items.map((u) => (
          <Row key={u.title} item={u} />
        ))}
      </div>
    </section>
  )
}
