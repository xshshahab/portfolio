import { Link, NavLink } from 'react-router-dom'
import { navLinks, profile } from '../data'
import { DarkModeLogo, LightModeLogo } from '../assets'
import ThemeToggle from './ThemeToggle'

const linkCls = ({ isActive }) => (isActive ? 'text-foreground' : 'hover:text-foreground')

export default function Nav() {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-8">
      <Link to="/" aria-label={profile.navName} className="hover:opacity-80">
        <span className="relative block h-8 w-24 shrink-0">
          <img
            src={LightModeLogo}
            alt={profile.navName}
            className="light-mode-logo absolute inset-0 h-full w-full object-contain"
          />
          <img
            src={DarkModeLogo}
            alt={profile.navName}
            className="dark-mode-logo absolute inset-0 hidden h-full w-full object-contain"
          />
        </span>
      </Link>
      <div className="flex items-center gap-3 font-mono text-sm text-zinc-500 sm:gap-4">
        {navLinks.map((l) =>
          l.to === '/new' ? (
            <NavLink key={l.to} to={l.to} className={linkCls}>
              {l.label}
            </NavLink>
          ) : (
            <Link key={l.to} to={l.to} className="hover:text-foreground">
              {l.label}
            </Link>
          ),
        )}
        <ThemeToggle />
      </div>
    </nav>
  )
}
