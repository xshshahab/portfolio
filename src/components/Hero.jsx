import { useState } from 'react'
import { LuBriefcase, LuMapPin } from 'react-icons/lu'
import { FaGithub } from 'react-icons/fa6'
import { profile, projectCount, socials } from '../data'

function compact(n) {
  return new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(n)
}

function Avatar() {
  const [failed, setFailed] = useState(false)
  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')

  if (failed) {
    return (
      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-zinc-100 font-mono text-2xl text-zinc-500 ring-1 ring-zinc-200">
        {initials}
      </div>
    )
  }
  return (
    <img
      src={profile.avatar}
      alt={profile.name}
      width={112}
      height={112}
      onError={() => setFailed(true)}
      className="h-28 w-28 rounded-full object-cover ring-1 ring-zinc-200"
    />
  )
}

export default function Hero({ github }) {
  const gh = github.profile

  return (
    <section id="top" className="flex flex-col gap-7">
      <div className="flex flex-col gap-4">
        <Avatar />
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">{profile.name}</h1>
        <p className="leading-7 text-zinc-600">{profile.role}</p>
        <p className="max-w-xl leading-7 text-zinc-600">{profile.bio}</p>
      </div>

      <div className="flex items-center gap-5 text-zinc-500">
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
            <Icon size={16} />
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-1.5 font-mono text-sm text-zinc-500">
        <p className="flex items-center gap-2">
          <LuBriefcase size={13} className="text-zinc-400" />
          {profile.experienceLabel} · {projectCount()} projects shipped
        </p>
        {github.status === 'loading' ? (
          <p className="text-zinc-400">loading stats…</p>
        ) : gh ? (
          <p className="flex items-center gap-2">
            <FaGithub size={13} className="text-zinc-400" />
            {compact(gh.followers)} followers · {gh.public_repos} repos
          </p>
        ) : (
          <p className="flex items-center gap-2">
            <LuMapPin size={13} className="text-zinc-400" />
            {profile.location}
          </p>
        )}
      </div>
    </section>
  )
}
