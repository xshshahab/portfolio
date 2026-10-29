import { socials } from '../data'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="mt-14 flex items-center justify-between border-t border-zinc-200 py-8 text-zinc-500">
      <div className="flex items-center gap-5">
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="hover:text-foreground"
          >
            <Icon size={14} />
          </a>
        ))}
      </div>
      <span className="font-mono text-xs text-zinc-400">Syphar © {year}</span>
    </footer>
  )
}
