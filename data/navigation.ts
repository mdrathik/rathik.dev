import { BookOpen, Code2, FolderKanban, Newspaper, Tag, TerminalSquare, User } from 'lucide-react'
import { SITE_METADATA } from './site-metadata'

export const HEADER_NAV_LINKS = [
  { href: '/blog', title: 'Blog', icon: Newspaper },
  { href: '/projects', title: 'Projects', icon: FolderKanban },
  { href: '/about', title: 'About', icon: User },
  { href: '/books', title: 'Books', icon: BookOpen },
]

export const MORE_NAV_LINKS = [
  { href: '/snippets', title: 'Snippets', icon: Code2 },
  { href: '/terminal', title: 'Terminal', icon: TerminalSquare },
  // { href: '/movies', title: 'Movies', emoji: 'film-frames' },
  { href: '/tags', title: 'Tags', icon: Tag },
]

export const FOOTER_NAV_LINKS = [
  { href: '/blog', title: 'Blog' },
  { href: '/snippets', title: 'Snippets' },
  { href: '/projects', title: 'Projects' },
  { href: '/tags', title: 'Tags' },
  { href: '/feed.xml', title: 'RSS Feed' },
]

export const FOOTER_PERSONAL_STUFF = [
  { href: '/about', title: 'About' },
  { href: '/static/resume.pdf', title: 'Resume' },
  // { href: '/books', title: 'Books' },
  // { href: '/movies', title: 'Movies' },
  { href: SITE_METADATA.analytics.umamiAnalytics.shareUrl, title: 'Analytics' },
]
