'use client'

import { clsx } from 'clsx'
import React from 'react'
import { Image } from '~/components/ui/image'
import { SpotifyNowPlaying } from '~/components/ui/now-playing'
import { SITE_METADATA } from '~/data/site-metadata'
import { ProfileCardInfo } from './profile-info'

export function ProfileCard() {
  return (
    <div className="z-10 mb-8 scale-100 transition-all duration-300 ease-out hover:z-50 hover:scale-[1.02] md:mb-0">
      <div
        className={clsx(
          'flex flex-col overflow-hidden rounded-2xl transition-all duration-300 ease-out',
          'border border-gray-200/70 bg-white/70 backdrop-blur-sm dark:border-gray-800 dark:bg-white/[0.03]',
          'shadow-[0_0_25px_-10px] shadow-rose-500/20 hover:border-rose-400/50 hover:shadow-[0_0_30px_-8px] hover:shadow-rose-500/30 dark:hover:border-rose-500/40'
        )}
      >
        <Image
          src={SITE_METADATA.profilePicture}
          alt={SITE_METADATA.title}
          width={550}
          height={350}
          style={{
            objectPosition: '50% 15%',
            aspectRatio: '383/240',
          }}
          loading="eager"
        />
        <SpotifyNowPlaying
          className={clsx([
            'bg-gray-900 px-3 py-1.5 xl:px-5',
            '[--song-color:theme(colors.gray.200)]',
            '[--artist-color:theme(colors.gray.400)]',
          ])}
        />
        <ProfileCardInfo />
        <span className="h-1.5 bg-gradient-to-r from-rose-600 via-red-500 to-orange-500 dark:from-rose-400 dark:via-red-400 dark:to-orange-400" />
      </div>
    </div>
  )
}
