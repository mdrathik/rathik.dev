import { Link } from '~/components/ui/link'
import { SITE_METADATA } from '~/data/site-metadata'
import { SpotifyCard } from './spotify-card'
import { TypedBios } from './typed-bios'

const SIGNALS = [
  { value: '8+', label: 'years professionally Googling error messages' },
  { value: 'CTO', label: 'still codes, still debugs, still blames the cache' },
  { value: '0', label: 'Friday deploys because I actually like my weekends' },
] as const

export function Hero() {
  return (
    <div>
      <p className="mb-4 font-mono text-sm text-rose-600 dark:text-rose-400">
        <span className="select-none text-gray-400 dark:text-gray-600">$ </span>whoami
      </p>

      <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
        I build{' '}
        <span className="relative inline-block text-rose-600 dark:text-rose-400">
          #SHIT
          <svg
            viewBox="0 0 190 18"
            fill="none"
            aria-hidden="true"
            className="absolute -bottom-1 left-0 h-3 w-full overflow-visible text-orange-500"
            preserveAspectRatio="none"
          >
            <path
              d="M3 11C38 3 72 15 108 8C137 2 161 5 187 3"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </span>
        ,{' '}
        <span className="text-black dark:text-white">
          that somehow <span className="text-orange-500 dark:text-orange-400">works.</span>
        </span>
      </h1>

      <div className="mt-4 text-base text-gray-600 dark:text-gray-400 md:text-lg">
        <TypedBios />
      </div>

      <div className="mt-6 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:gap-14">
        <div>
          <p className="max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400 md:text-base md:leading-7">
            I'm Rathik. CTO at{' '}
            <Link
              href="https://www.codecony.com"
              className="font-medium text-gray-700 underline decoration-rose-400/50 underline-offset-2 transition-colors hover:text-rose-600 dark:text-gray-300 dark:hover:text-rose-400"
              data-umami-event="hero-codecony"
            >
              CODECONY
            </Link>
            . The title says strategy and leadership; my browser history still says “why is this VM
            suddenly out of disk space?” I lead the team, design the systems, and write code when
            PowerPoint fails to compile. This happens more often than you would think.
          </p>

          <div className="mt-7 flex flex-nowrap items-center gap-2 sm:gap-3">
            <Link
              href="/projects"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-gradient-to-r from-rose-600 to-red-500 px-3 py-2 text-xs font-semibold text-white no-underline shadow-[0_0_30px_-6px] shadow-rose-600/60 transition-all duration-200 hover:shadow-[0_0_35px_-4px] hover:shadow-rose-500/70 hover:brightness-110 sm:px-5 sm:py-2.5 sm:text-sm"
            >
              See the evidence &rarr;
            </Link>
            <Link
              href={`mailto:${SITE_METADATA.email}`}
              className="inline-flex min-w-0 items-center gap-1.5 rounded-lg border border-gray-300/70 bg-white/50 px-3 py-2 font-mono text-xs text-gray-800 no-underline backdrop-blur-sm transition-colors duration-200 hover:border-rose-400/60 hover:text-rose-600 dark:border-gray-700 dark:bg-white/5 dark:text-gray-200 dark:hover:border-rose-500/50 dark:hover:text-rose-400 sm:px-5 sm:py-2.5 sm:text-sm"
            >
              {SITE_METADATA.email}
            </Link>
          </div>
        </div>

        <SpotifyCard />
      </div>
    </div>
  )
}

export function HeroSignals() {
  return (
    <div className="mt-12 grid grid-cols-3 gap-x-4 border-t border-gray-200/70 pt-6 dark:border-gray-800 md:gap-x-12">
      {SIGNALS.map(({ value, label }) => (
        <div key={label} className="min-w-0">
          <div className="text-xl font-bold text-gray-900 dark:text-gray-100 md:text-2xl">
            {value}
          </div>
          <div className="mt-0.5 break-words font-mono text-xs leading-5 text-gray-500 dark:text-gray-400">
            {label}
          </div>
        </div>
      ))}
    </div>
  )
}
