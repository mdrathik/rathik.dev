import type { Blog, Snippet } from '~/.contentlayer/generated'
import { Container } from '~/components/ui/container'
import { Twemoji } from '~/components/ui/twemoji'
import type { CoreContent } from '~/types/data'
import { LatestPosts } from './latest-posts'
import { BlogLinks } from './links'
import { Terminal } from './terminal'

export function Home({
  posts,
  snippets,
}: {
  posts: CoreContent<Blog>[]
  snippets: CoreContent<Snippet>[]
}) {
  return (
    <Container as="div" className="pt-4 lg:pt-12">
      <div className="py-6 md:pb-8">
        <div className="space-y-4 md:space-y-6">
          <div className="text-base leading-7 text-gray-600 dark:text-gray-400 md:text-lg md:leading-8">
            <Terminal />
          </div>
        </div>
      </div>
      {/* <LatestPosts posts={posts} snippets={snippets} /> */}
      {/* {SITE_METADATA.newsletter?.provider && (
        <div className="flex items-center justify-center py-4 lg:py-10">
          <NewsletterForm />
        </div>
      )} */}
    </Container>
  )
}
