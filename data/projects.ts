import type { Project } from '~/types/data'

export const PROJECTS: Project[] = [
  {
    type: 'work',
    title: 'BZM HRM',
    description:
      'This software streamlines our workforce management, enhancing productivity and simplifying complex HR processes environment.',
    imgSrc: '/static/images/bzm.png',
    url: '#',
    builtWith: ['Laravel', 'jQuery', 'MySQL'],
    links: [{ title: 'Website', url: '#' }],
  },

  {
    type: 'work',
    title: 'maskbg.ai',
    description:
      'Mask.bg (or Maskbg.ai) is an AI-powered photo editing tool specialized in background removal. Collaborated with ML Developers to make the app for production workflow.',
    imgSrc: '/static/images/hero-image.webp',
    url: 'https://maskbg.ai',
    builtWith: ['Python', 'ReactJS', 'NextJS', 'MongoDB'],
    links: [{ title: 'Website', url: 'https://maskbg.ai' }],
  },

  {
    type: 'work',
    title: 'BZM Graphics Website',
    description:
      'Collaborated project, working closely with UI/UX developers to enhance design sophistication and implement iterative improvements. ',
    imgSrc: '/static/images/bzm.png',
    url: 'https://bzmgraphics.com',
    builtWith: ['ReactJS', 'NextJS', 'MongoDB'],
    links: [{ title: 'Website', url: 'https://bzmgraphics.com' }],
  },

  {
    type: 'work',
    title: 'A Shop of Gift Card and More',
    description: `GamersNab sell game tools and gift card, its built on Laravel, jQuery, Bootstrap & Mysql. `,
    imgSrc: '/static/images/gamersnab.png',
    url: 'https://gamersnab.com',
    builtWith: ['Laravel', 'jQuery', 'Bootstrap', 'MySQL'],
    links: [{ title: 'Website', url: 'https://gamersnab.com' }],
  },
  {
    type: 'work',
    title: 'Legend Learning Center',
    description: `Education supplementary provider aiming to help shape communities. Its built it with wix & Laravel API for some other Service`,
    imgSrc: '/static/images/Lagents Learning Center.png',
    url: 'https://www.legendslearningcentre.co.uk/',
    builtWith: ['Wix'],
    links: [{ title: 'Website', url: 'https://www.legendslearningcentre.com/' }],
  },
  {
    type: 'work',
    title: 'Kumon',
    description: `Kumon is a structured, proven self-learning program. Its built it with WIX`,
    imgSrc: '/static/images/kumon.jpg',
    url: 'https://www.kumon.com/',
    builtWith: ['Wix'],
    links: [{ title: 'Website', url: 'https://www.kumon.com/' }],
  },
  {
    type: 'self',
    title: 'Nuxt-JS Blog',
    description: `This is a nuxtjs, Tailwind CSS blogging template. Its supported Markdown for blog`,
    imgSrc: '/static/images/nuxt.png',
    url: 'https://github.com/mdrathik/nuxtjs-tailwind-blog',
    builtWith: ['NuxtJS', 'TailwindCSS'],
    links: [
      { title: 'Webiste', url: 'https://nuxt-tailwind-blog.netlify.app/' },
      { title: 'GitHub Org', url: 'https://github.com/mdrathik/nuxtjs-tailwind-blog' },
    ],
  },
  {
    type: 'self',
    title: 'VueJs Crud using Vuex',
    description: `A Single Page Contact List application using VueJS , VueRouter & VueX`,
    imgSrc: '/static/images/vue.png',
    url: 'https://github.com/mdrathik/vuejs-vuex-crud',
    builtWith: ['VueJs', 'TailwindCSS'],
    links: [
      { title: 'Website', url: 'https://github.com/mdrathik/vuejs-vuex-crud' },
      { title: 'GitHub Org', url: 'https://github.com/mdrathik/vuejs-vuex-crud' },
    ],
  },
  {
    type: 'self',
    title: 'Portfolio - Tailwind',
    description: `A Simple Portfolio Template built with VueJS (Vite) + TailwindCss`,
    imgSrc: '/static/images/tailwind.png',
    url: 'https://github.com/mdrathik/designer-portfolio',
    builtWith: ['VueJS', 'TailwindCSS'],
    links: [{ title: 'GitHub Org', url: 'https://github.com/mdrathik/designer-portfolio' }],
  },
  {
    type: 'self',
    title: 'Career - Hiring Page',
    description: `A webpage to hire people which is build on Laravel`,
    imgSrc: '/static/images/laravel-icon.png',
    url: '#',
    builtWith: ['Laravel'],
    links: [
      { title: 'Website', url: '#' },
      { title: 'GitHub Org', url: '#' },
    ],
  },
]
