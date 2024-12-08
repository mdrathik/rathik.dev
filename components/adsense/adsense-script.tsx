// components/adsense/adsense-script.tsx

'use client'

import Script from 'next/script'
import { useEffect } from 'react'

export function AdSenseScript() {
  useEffect(() => {
    if (window.adsbygoogle) {
      try {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (e) {
        console.error('AdSense initialization failed:', e)
      }
    }
  }, [])

  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9583661339866748"
      strategy="afterInteractive"
      crossOrigin="anonymous"
      onError={(e) => {
        console.error('AdSense script failed to load:', e)
      }}
    />
  )
}
