import { Link } from 'react-router-dom'

export default function SectionHeader({ title, description, href, to, linkLabel = 'all →' }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-baseline justify-between">
        <h2 className="font-mono text-sm uppercase tracking-wider text-zinc-500">{title}</h2>
        {to && (
          <Link to={to} className="font-mono text-sm text-zinc-500 hover:text-foreground">
            {linkLabel}
          </Link>
        )}
        {href && (
          <a
            href={href}
            target={href.startsWith('#') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="font-mono text-sm text-zinc-500 hover:text-foreground"
          >
            {linkLabel}
          </a>
        )}
      </div>
      {description && <p className="text-zinc-600">{description}</p>}
    </div>
  )
}

export function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="font-mono text-sm text-zinc-400 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
    >
      ↗
    </span>
  )
}
