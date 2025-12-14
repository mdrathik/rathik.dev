export const SITE_METADATA = {
  title: `Md Rathik | Tech Autodidact`,
  author: 'Md Rathik',
  headerTitle: `Rathik's dev blog`,
  description: 'A tech enthusiast & self taught learner. Love to talk the way of tech.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.rathik.dev',
  siteRepo: 'https://github.com/mdrathik/rathik.dev',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.jpeg`,
  profilePicture: `${process.env.BASE_PATH || ''}/static/images/profile-picture.jpg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.jpeg`,
  email: 'hello@rathik.dev',
  github: 'https://github.com/mdrathik',
  x: 'https://twitter.com/mdrathik',
  whatsapp: 'https://wa.me/8801766256001',
  youtube: 'https://www.youtube.com/mdrathik',
  linkedin: 'https://www.linkedin.com/in/mdrathik',
  threads: 'https://www.threads.net/mdrathik',
  instagram: 'https://www.instagram.com/mdrathik',
  locale: 'en-US',
  stickyNav: true,
  goodreadsBookshelfUrl: 'https://www.goodreads.com/review/list/179720035-leo-huynh',
  goodreadsFeedUrl: 'https://www.goodreads.com/review/list_rss/179720035',
  imdbRatingsList: 'https://www.imdb.com/user/ur154483197/ratings/?view=grid',
  analytics: {
    umamiAnalytics: {
      websiteId: '3e4c5370-7ba7-4ae7-863d-77d3bafb17d2',
      shareUrl: 'https://cloud.umami.is/share/qdxTQ1RIIRUMswxe/rathik.dev',
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    giscusConfigs: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO!,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    kbarConfigs: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
  support: {
    buyMeACoffee: 'https://www.buymeacoffee.com/leohuynh.dev',
    paypal: 'https://paypal.me/hta218?country.x=VN&locale.x=en_US',
    kofi: 'https://ko-fi.com/hta218',
  },
}
