// components/adsense/AdUnit.tsx
'use client' // Marking this as a Client Component

import React, { useEffect, useRef } from 'react'

interface AdUnitProps {
  adClient: string
  adSlot: string
  adFormat?: string
  fullWidthResponsive?: boolean
}

const AdUnit: React.FC<AdUnitProps> = ({
  adClient,
  adSlot,
  adFormat = 'auto', // Default to auto ad format
  fullWidthResponsive = true, // Default to full-width responsive
}) => {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only push ad once the component is mounted
    if (window.adsbygoogle) {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    }
  }, [])

  return (
    <div ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      ></ins>
    </div>
  )
}

export default AdUnit
