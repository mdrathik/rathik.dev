import Script from 'next/script'

export function UmamiAnalytics() {
  // Hardcoded values
  const websiteId = 'e390f4d5-d20c-474a-87a7-4318fa7ba907'
  const scriptSrc = 'https://cloud.umami.is/script.js' // Direct URL to the Umami Cloud script

  return <Script async defer data-website-id={websiteId} src={scriptSrc} />
}
