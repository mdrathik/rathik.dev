import type { Blog, Snippet } from '~/.contentlayer/generated'
import { ProfileCard } from '~/components/cards/profile'
import { Container } from '~/components/ui/container'
import { Twemoji } from '~/components/ui/twemoji'
import type { CoreContent } from '~/types/data'
import { Greeting } from './greeting'
import { Intro } from './intro'
import { LatestPosts } from './latest-posts'
import { BlogLinks } from './links'
import { TypedBios } from './typed-bios'
import AdUnit from '~/components/adsense/AdUnit'

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
          <Greeting />
          <div className="text-base leading-7 text-gray-600 dark:text-gray-400 md:text-lg md:leading-8">
            <Intro />
            <TypedBios />
            <div className="mb-6 mt-4 md:mb-8">
              <p>
                I started learning to code in 2016, and it has been an exciting journey ever since.
              </p>
              <p>
                I landed my first role in tech as a PHP developer, where I discovered my love for
                problem-solving & Many others stuff.
              </p>
              <p>
                I have a passion for web development, Laravel, and exploring secure software
                solutions.
              </p>
              <p>
                I started this platform to document and share my knowledge, experiences, and
                insights.
              </p>
            </div>
            <BlogLinks />
            <p className="my-6 flex md:my-8">
              <span className="mr-2">Happy reading</span>
              <Twemoji emoji="clinking-beer-mugs" />
            </p>
            <AdUnit adClient="ca-pub-9583661339866748" adSlot="4551714058" />
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
