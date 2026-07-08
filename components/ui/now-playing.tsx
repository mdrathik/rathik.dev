'use client'

import { clsx } from 'clsx'
import { Brand } from '~/components/ui/brand'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { Link } from '~/components/ui/link'
import { MusicWaves } from '~/components/ui/music-waves'
import { useNowPlaying } from '~/hooks/use-now-playing'
import { Image } from './image'

export function SpotifyNowPlaying({
  className,
  showCover,
  songEffect = 'none',
  showFallbackIcon = true,
  variant = 'inline',
}: {
  className?: string
  showCover?: boolean
  songEffect?: 'none' | 'underline'
  showFallbackIcon?: boolean
  variant?: 'inline' | 'stacked'
}) {
  let { songUrl, title, artist, albumImageUrl } = useNowPlaying()

  if (variant === 'stacked') {
    return (
      <div className={clsx(['flex items-center gap-3', className])}>
        {showCover && albumImageUrl ? (
          <Image
            src={albumImageUrl}
            alt={title!}
            width={96}
            height={96}
            className="h-20 w-20 shrink-0 rounded-lg border border-gray-300 shadow-md dark:border-gray-700"
          />
        ) : showFallbackIcon ? (
          <Brand as="icon" name="Spotify" className="h-14 w-14 shrink-0" />
        ) : null}
        <div className="min-w-0 flex-1">
          <div className="flex items-center">
            {songUrl ? (
              <>
                <MusicWaves className="mr-2 shrink-0" />
                <Link
                  href={songUrl}
                  className="truncate font-medium text-[--song-color]"
                  title={`${title} - ${artist || 'Spotify'}`}
                >
                  {songEffect === 'underline' ? (
                    <GrowingUnderline data-umami-event="spotify-now-playing-view-song">
                      {title}
                    </GrowingUnderline>
                  ) : (
                    <span data-umami-event="spotify-now-playing-view-song">{title}</span>
                  )}
                </Link>
              </>
            ) : (
              <p className="font-medium text-[--song-color]">Not Playing</p>
            )}
          </div>
          <p className="mt-0.5 truncate text-xs text-[--artist-color]">{artist || 'Spotify'}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={clsx(['flex items-center', className])}>
      {showCover && albumImageUrl ? (
        <Image
          src={albumImageUrl}
          alt={title!}
          width={40}
          height={40}
          className="h-5.5 w-5.5 shrink-0 rounded-md border border-gray-300 dark:border-gray-700"
        />
      ) : showFallbackIcon ? (
        <Brand as="icon" name="Spotify" className="h-5.5 w-5.5 shrink-0" />
      ) : null}
      <div className="ml-2 inline-flex items-center truncate">
        {songUrl ? (
          <>
            <MusicWaves className="mr-2" />
            <Link
              href={songUrl}
              className="font-medium text-[--song-color]"
              title={`${title} - ${artist || 'Spotify'}`}
            >
              {songEffect === 'underline' ? (
                <GrowingUnderline data-umami-event="spotify-now-playing-view-song">
                  {title}
                </GrowingUnderline>
              ) : (
                <span data-umami-event="spotify-now-playing-view-song">{title}</span>
              )}
            </Link>
          </>
        ) : (
          <p className="font-medium text-[--song-color]">Not Playing</p>
        )}
        <span className="mx-2 text-[--artist-color]">{' – '}</span>
        <p className="spotify-artist max-w-max truncate text-[--artist-color]">
          {artist || 'Spotify'}
        </p>
      </div>
    </div>
  )
}
