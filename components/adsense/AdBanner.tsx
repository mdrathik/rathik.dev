'use client' // Ensure this is client-side

import React, { useEffect } from 'react'

const AdBanner: React.FC = () => {
  useEffect(() => {
    // Initialize Google Ads when the component is mounted
    if (window.adsbygoogle) {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-9583661339866748"
      data-ad-slot="4551714058"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  )
}

export default AdBanner
