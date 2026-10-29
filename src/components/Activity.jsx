const LEVELS = ['bg-zinc-100', 'bg-zinc-300', 'bg-zinc-400', 'bg-zinc-600', 'bg-foreground']
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const WEEKS = 53

function toWeeks(days) {
  const weeks = []
  for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7))
  return weeks
}

// Label a column when its first day starts a new month, skipping labels that would collide.
function monthLabels(weeks) {
  const labels = {}
  let lastMonth = -1
  let lastCol = -10
  weeks.forEach((week, col) => {
    const month = new Date(week[0].date + 'T00:00:00').getMonth()
    if (month !== lastMonth) {
      if (col - lastCol >= 3) {
        labels[col] = MONTHS[month]
        lastCol = col
      }
      lastMonth = month
    }
  })
  return labels
}

export default function Activity({ github }) {
  if (github.status === 'done' && github.days.length === 0) return null

  const loading = github.status === 'loading'
  const weeks = loading
    ? Array.from({ length: WEEKS }, () => Array.from({ length: 7 }, () => null))
    : toWeeks(github.days)
  const labels = loading ? {} : monthLabels(weeks)
  const total = loading ? null : github.days.reduce((sum, d) => sum + d.count, 0)

  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-col gap-1.5">
        <h2 className="font-mono text-sm uppercase tracking-wider text-zinc-500">Activity</h2>
        <p className="text-sm text-zinc-600">
          GitHub contributions over the last year{total != null && ` — ${total.toLocaleString()} in total`}.
        </p>
      </div>

      <div className="flex w-full flex-col gap-1.5">
        <div className="flex w-full gap-[3px] font-mono text-[10px] text-zinc-400" aria-hidden="true">
          {weeks.map((_, col) => (
            <div key={col} className="relative h-3 min-w-0 flex-1">
              {labels[col] && <span className="absolute left-0 whitespace-nowrap">{labels[col]}</span>}
            </div>
          ))}
        </div>

        <div className="flex w-full gap-[3px]" role="img" aria-label="GitHub contribution activity over the last year">
          {weeks.map((week, col) => (
            <div key={col} className="flex min-w-0 flex-1 flex-col gap-[3px]">
              {Array.from({ length: 7 }, (_, row) => {
                const day = week[row]
                return (
                  <div
                    key={row}
                    title={day ? `${day.count} contributions on ${day.date}` : undefined}
                    className={`aspect-square w-full rounded-[2px] ${day ? LEVELS[day.level] : loading ? 'bg-zinc-100' : ''}`}
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-400">
        <span>less</span>
        {LEVELS.map((c) => (
          <span key={c} className={`h-2.5 w-2.5 rounded-[2px] ${c}`} />
        ))}
        <span>more</span>
      </div>
    </section>
  )
}
