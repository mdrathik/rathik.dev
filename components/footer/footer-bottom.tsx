import { clsx } from 'clsx'
import { AreaChart, Rss } from 'lucide-react'
import { Link } from '~/components/ui/link'
import { SpotifyNowPlaying } from '~/components/ui/now-playing'
import { SITE_METADATA } from '~/data/site-metadata'
import Claude from '~/icons/claude.svg'
import MadeInVietNam from '~/icons/miv.svg'

export function FooterBottom() {
  return (
    <div
      className={clsx([
        'pt-5 md:my-2',
        'flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between md:gap-16',
        'border-t border-gray-200 dark:border-gray-700',
      ])}
    >
      <SpotifyNowPlaying
        className="w-full justify-center truncate [--artist-color:theme(colors.gray.500)] md:max-w-[50%] md:justify-start"
        songEffect="underline"
      />
      <div className="flex items-center">
        <a href={SITE_METADATA.github} target="_blank" className="flex items-center gap-1.5">
          Built by RT +{' '}
          <span className="flex items-center gap-1 text-[#D97757]">
            <Claude className="h-4 w-4" />
            Fable 5
          </span>
        </a>

        {/* <Link href={SITE_METADATA.siteRepo}>
          <span data-umami-event="made-in-bangladesh">
            <MadeInVietNam />
          </span>
        </Link> */}
      </div>
    </div>
  )
}
