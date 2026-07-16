import { Container } from '~/components/ui/container'
import { Link } from '~/components/ui/link'
import { Contact } from './contact'
import { FocusAreas } from './focus-areas'
import { GithubActivity } from './github-activity'
import { Hero, HeroSignals } from './hero'
import { TechStack } from './tech-stack'

export function Home() {
  return (
    <>
      <Container as="div" className="pt-10 lg:pt-20">
        <Hero />
        <HeroSignals />
        <FocusAreas />
      </Container>

      {/* Tech Stack - Marquee */}
      <div className="py-6 md:py-10">
        <Container>
          <p className="mb-8 font-mono text-sm text-rose-600 dark:text-rose-400">
            <span className="select-none text-gray-400 dark:text-gray-600">$ </span>ls stack/
          </p>
        </Container>
        <TechStack />
        <Container>
          <p className="mt-7 text-sm leading-6 text-gray-500 dark:text-gray-400">
            Credit where it is due.{' '}
            <Link
              href="https://openai.com"
              className="font-medium text-gray-700 underline decoration-rose-400/50 underline-offset-2 hover:text-rose-600 dark:text-gray-300 dark:hover:text-rose-400"
              data-umami-event="home-credit-openai"
            >
              OpenAI
            </Link>{' '}
            and{' '}
            <Link
              href="https://claude.ai"
              className="font-medium text-gray-700 underline decoration-rose-400/50 underline-offset-2 hover:text-rose-600 dark:text-gray-300 dark:hover:text-rose-400"
              data-umami-event="home-credit-claude"
            >
              Claude
            </Link>{' '}
            helped me build this. I supplied the prompts and accepted responsibility for whatever
            passed review.
          </p>
        </Container>
      </div>

      <Container className="py-6 md:py-10">
        <p className="mb-8 font-mono text-sm text-rose-600 dark:text-rose-400">
          <span className="select-none text-gray-400 dark:text-gray-600">$ </span>git log
        </p>
        <GithubActivity />
      </Container>

      <Container>
        <Contact />
      </Container>
    </>
  )
}
