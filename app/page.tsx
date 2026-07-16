import type { Metadata } from 'next'
import { Home } from '~/components/home-page'
import { SITE_METADATA } from '~/data/site-metadata'

export let metadata: Metadata = {
  title: { absolute: SITE_METADATA.title },
  description: SITE_METADATA.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    url: '/',
    siteName: SITE_METADATA.title,
    type: 'website',
    images: [
      {
        url: SITE_METADATA.socialBanner,
        width: 1200,
        height: 630,
        alt: 'Md Rathik with the words I build #SHIT, that somehow works',
      },
    ],
  },
  twitter: {
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    card: 'summary_large_image',
    images: [
      {
        url: SITE_METADATA.socialBanner,
        width: 1200,
        height: 630,
        alt: 'Md Rathik with the words I build #SHIT, that somehow works',
      },
    ],
  },
}

export default function HomePage() {
  return <Home />
}
