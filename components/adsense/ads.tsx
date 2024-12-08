// components/adsense/google-ads.tsx

'use client'

import { useEffect } from 'react'

export function GoogleAds({ client, slot }: { client: string; slot: string }) {
  useEffect(() => {
    // Ensure the script has loaded before pushing the ad
    if (typeof window !== 'undefined') {
      // Check if the adsbygoogle array is not empty
      if (window.adsbygoogle && window.adsbygoogle.length) {
        // Push ad only if it hasn't been pushed already
        window.adsbygoogle.push({})
      }
    }
  }, [client, slot]) // Add dependencies to rerun effect if client or slot changes

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}
