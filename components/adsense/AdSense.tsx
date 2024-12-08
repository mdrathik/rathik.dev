'use client' // Explicitly mark as a client-side component

import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import AdBanner from './AdBanner' // Import the AdBanner component

const AdSense: React.FC = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // This ensures that the ad script is only executed on the client
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // Don't render anything on the server-side
  }

  return (
    <>
      {/* Load the Google AdSense script after the page becomes interactive */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9583661339866748"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      ></Script>

      {/* Render the AdBanner component */}
      <AdBanner />
    </>
  )
}

export default AdSense
