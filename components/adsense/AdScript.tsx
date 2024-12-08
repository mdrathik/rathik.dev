// components/adsense/AdScript.tsx
'use client' // This ensures the component is rendered on the client-side.

import Script from 'next/script'

const AdScript: React.FC = () => {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9583661339866748"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}

export default AdScript
