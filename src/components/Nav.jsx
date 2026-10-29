import { Link, NavLink } from 'react-router-dom'
import { navLinks, profile } from '../data'
import ThemeToggle from './ThemeToggle'

const linkCls = ({ isActive }) => (isActive ? 'text-foreground' : 'hover:text-foreground')

export default function Nav() {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-8">
      <Link to="/" className="font-mono text-sm text-foreground hover:text-zinc-500">
        {profile.navName}
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
