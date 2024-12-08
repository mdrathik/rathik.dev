// components/adsense/AdUnit.tsx
'use client' // Marking this as a Client Component

import React, { useEffect, useRef } from 'react'

interface AdUnitProps {
  adClient: string
  adSlot: string
}

const AdUnit: React.FC<AdUnitProps> = ({ adClient, adSlot }) => {
  const hasRun = useRef(false)

  useEffect(() => {
    if (!hasRun.current) {
      // Make sure window.adsbygoogle exists before pushing to it
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }
      hasRun.current = true
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  )
}

export default AdUnit
