import { Link } from '~/components/ui/link'
import { SITE_METADATA } from '~/data/site-metadata'

const SOCIALS = [
  { label: 'github', href: SITE_METADATA.github },
  { label: 'linkedin', href: SITE_METADATA.linkedin },
  { label: 'x.com', href: SITE_METADATA.x },
  { label: 'terminal', href: '/terminal' },
] as const

export function Contact() {
  return (
    <div className="py-16 text-center md:py-24">
      <p className="font-mono text-sm text-rose-600 dark:text-rose-400">
        <span className="select-none text-gray-400 dark:text-gray-600">$ </span>ping rathik.dev
      </p>

      <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
        Got an idea that sounds slightly{' '}
        <span className="bg-gradient-to-r from-rose-600 via-red-500 to-orange-500 bg-clip-text text-transparent dark:from-rose-400 dark:via-red-400 dark:to-orange-400">
          unhinged
        </span>
        ?
      </h2>

      <p className="mt-4 text-gray-600 dark:text-gray-400 md:text-lg">
        Perfect. The normal ideas are already being ruined by committees. Let’s build yours.
      </p>

      <Link
        href={`mailto:${SITE_METADATA.email}`}
        className="group mt-8 inline-flex items-center gap-2 text-xl font-bold text-gray-900 no-underline dark:text-gray-100 md:text-2xl"
        data-umami-event="home-contact-email"
      >
        <span className="border-b-2 border-rose-500/40 pb-0.5 transition-colors duration-200 group-hover:border-rose-500 group-hover:text-rose-600 dark:group-hover:text-rose-400">
          {SITE_METADATA.email}
        </span>
        <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
      </Link>

      <div className="mt-8 flex items-center justify-center gap-6 font-mono text-sm">
        {SOCIALS.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="text-gray-500 transition-colors duration-200 hover:text-rose-600 dark:text-gray-400 dark:hover:text-rose-400"
            data-umami-event={`home-contact-${label}`}
          >
            ./{label}
          </Link>
        ))}
      </div>
    </div>
  )
}
