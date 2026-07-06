import { Link } from '~/components/ui/link'

const AREAS = [
  {
    index: '01',
    title: 'Product Engineering',
    description:
      'Full-stack builds with Laravel, Next.js, and Node — taking ideas from a whiteboard sketch to production traffic.',
  },
  {
    index: '02',
    title: 'Architecture & Teams',
    description: (
      <>
        Leading engineering at{' '}
        <Link
          href="https://www.codecony.com"
          className="underline decoration-rose-400/50 underline-offset-2 transition-colors hover:text-rose-600 dark:hover:text-rose-400"
          data-umami-event="focus-codecony"
        >
          CODECONY
        </Link>
        : designing systems that scale with the roadmap, and growing the people who run them.
      </>
    ),
  },
  {
    index: '03',
    title: 'DevOps & Security',
    description:
      'CI/CD pipelines, Docker, Linux. Shipping fast without breaking trust — reliability and security as defaults, not afterthoughts.',
  },
] as const

export function FocusAreas() {
  return (
    <div className="py-12 md:py-16">
      <p className="mb-8 font-mono text-sm text-rose-600 dark:text-rose-400">
        <span className="select-none text-gray-400 dark:text-gray-600">$ </span>cat focus.md
      </p>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {AREAS.map(({ index, title, description }) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white/60 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-rose-400/50 dark:border-gray-800 dark:bg-white/[0.03] dark:hover:border-rose-500/40"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-rose-400/0 blur-2xl transition-colors duration-500 group-hover:bg-rose-400/20 dark:group-hover:bg-rose-500/10" />
            <div className="font-mono text-sm text-rose-500/70 dark:text-rose-400/60">{index}</div>
            <h3 className="mt-3 text-lg font-bold text-gray-900 dark:text-gray-100">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
