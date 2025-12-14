import type { Blog, Snippet } from '~/.contentlayer/generated'
import { ProfileCard } from '~/components/cards/profile'
import { Container } from '~/components/ui/container'
import { Twemoji } from '~/components/ui/twemoji'
import type { CoreContent } from '~/types/data'
import { LatestPosts } from './latest-posts'
import { BlogLinks } from './links'
import { TypedBios } from './typed-bios'

export function Home({
  posts,
  snippets,
}: {
  posts: CoreContent<Blog>[]
  snippets: CoreContent<Snippet>[]
}) {
  return (
    <Container as="div" className="pt-4 lg:pt-12">
      <div className="py-6 md:pb-8 xl:grid xl:grid-cols-3">
        <div className="space-y-4 md:space-y-6 md:pr-8 xl:col-span-2">
          <h1 className="my-8 text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl md:text-3xl">
            A passionate{' '}
            <span className="line-through decoration-red-500 decoration-2">Software Dev</span>{' '}
            <span className="text-bold animate-wave-pulse bg-gradient-to-r from-emerald-500 via-blue-500 via-purple-500 to-pink-500 bg-[length:400%_auto] bg-clip-text font-bold text-transparent">
              Viber Coder
            </span>
          </h1>
          <TypedBios />
          <div className="text-base leading-7 text-gray-600 dark:text-gray-400 md:text-lg md:leading-8">
            <div className="mb-6 mt-4 md:mb-8">
              <p>
                I started learning to code in 2016, and it has been an exciting journey ever since.
              </p>
              <p>
                I landed my first role in tech as a PHP developer, where I discovered my love for
                problem-solving & Many others stuff. I started this platform to document and share
                my knowledge, experiences, and insights.
              </p>
            </div>
            <BlogLinks />
            <p className="my-6 flex md:my-8">
              <span className="mr-2">Happy reading</span>
              <Twemoji emoji="clinking-beer-mugs" />
            </p>
          </div>
        </div>
        <div className="hidden pl-4 pt-8 xl:block">
          <ProfileCard />
        </div>
      </div>
      <LatestPosts posts={posts} snippets={snippets} />
      {/* {SITE_METADATA.newsletter?.provider && (
        <div className="flex items-center justify-center py-4 lg:py-10">
          <NewsletterForm />
        </div>
      )} */}
    </Container>
  )
}
