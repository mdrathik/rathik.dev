'use client'

import { Brand } from '~/components/ui/brand'
import { SpotifyNowPlaying } from '~/components/ui/now-playing'
import { useNowPlaying } from '~/hooks/use-now-playing'

export function SpotifyCard() {
  let { isPlaying } = useNowPlaying()

  return (
    <div className="w-full max-w-sm rounded-2xl border border-spotify/30 bg-white/60 p-4 shadow-[0_0_25px_-10px] shadow-spotify/30 backdrop-blur-sm transition-all duration-300 hover:border-spotify/60 hover:shadow-[0_0_30px_-8px] hover:shadow-spotify/40 dark:border-spotify/25 dark:bg-white/[0.03] dark:hover:border-spotify/50 sm:p-6 lg:justify-self-end">
      <div className="flex items-center gap-2">
        <Brand as="icon" name="Spotify" className="h-5 w-5 text-spotify" />
        <span className="font-mono text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
          {isPlaying ? 'now playing' : 'offline'}
        </span>
        <span className="relative ml-auto flex h-2 w-2">
          {isPlaying ? (
            <>
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-spotify opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-spotify" />
            </>
          ) : (
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gray-400 dark:bg-gray-600" />
          )}
        </span>
      </div>
      <SpotifyNowPlaying
        className="mt-4 text-sm [--artist-color:theme(colors.gray.500)] [--song-color:theme(colors.gray.900)] dark:[--song-color:theme(colors.gray.100)] sm:mt-6 md:text-base"
        songEffect="underline"
        variant="stacked"
        showCover
        showFallbackIcon={false}
      />
      <p className="mt-4 border-t border-gray-200/70 pt-3 font-mono text-[11px] text-gray-400 dark:border-gray-800 dark:text-gray-500 sm:mt-6 sm:pt-4">
        {isPlaying ? '# the soundtrack while I ship' : '# quiet hours — probably in a meeting'}
      </p>
    </div>
  )
}
