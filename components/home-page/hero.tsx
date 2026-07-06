import { Link } from '~/components/ui/link'
import { SITE_METADATA } from '~/data/site-metadata'
import { SpotifyCard } from './spotify-card'
import { TypedBios } from './typed-bios'

const SIGNALS = [
  { value: '8+', label: 'years turning coffee into production code' },
  { value: 'CTO', label: 'still writes code, still breaks staging' },
  { value: '0', label: 'Friday deploys since 2017' },
] as const

export function Hero() {
  return (
    <div>
      <p className="mb-4 font-mono text-sm text-rose-600 dark:text-rose-400">
        <span className="select-none text-gray-400 dark:text-gray-600">$ </span>whoami
      </p>

      <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
        I build products —{' '}
        <span className="bg-gradient-to-r from-rose-600 via-red-500 to-orange-500 bg-clip-text text-transparent dark:from-rose-400 dark:via-red-400 dark:to-orange-400">
          and the teams
        </span>{' '}
        that ship them.
      </h1>

      <div className="mt-4 text-base text-gray-600 dark:text-gray-400 md:text-lg">
        <TypedBios />
      </div>

      <div className="mt-6 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:gap-14">
        <div>
          <p className="max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400 md:text-base md:leading-7">
            I'm Rathik — I run engineering at CODECONY, which means half my job is building products
            and the other half is convincing developers that naming things matters. I ship fast,
            delete code with joy, and treat every "quick little fix" as the lie it is.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-rose-600 to-red-500 px-5 py-2.5 text-sm font-semibold text-white no-underline shadow-[0_0_30px_-6px] shadow-rose-600/60 transition-all duration-200 hover:shadow-[0_0_35px_-4px] hover:shadow-rose-500/70 hover:brightness-110"
            >
              View my work &rarr;
            </Link>
            <Link
              href={`mailto:${SITE_METADATA.email}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300/70 bg-white/50 px-5 py-2.5 font-mono text-sm text-gray-800 no-underline backdrop-blur-sm transition-colors duration-200 hover:border-rose-400/60 hover:text-rose-600 dark:border-gray-700 dark:bg-white/5 dark:text-gray-200 dark:hover:border-rose-500/50 dark:hover:text-rose-400"
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
    <div className="mt-12 flex flex-wrap gap-x-12 gap-y-4 border-t border-gray-200/70 pt-6 dark:border-gray-800">
      {SIGNALS.map(({ value, label }) => (
        <div key={label}>
          <div className="text-xl font-bold text-gray-900 dark:text-gray-100 md:text-2xl">
            {value}
          </div>
          <div className="mt-0.5 font-mono text-xs text-gray-500 dark:text-gray-400">{label}</div>
        </div>
      ))}
    </div>
  )
}
