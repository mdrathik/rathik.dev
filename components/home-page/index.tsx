import { Container } from '~/components/ui/container'
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
      </div>

      <Container className="py-6 md:py-10">
        <p className="mb-8 font-mono text-sm text-rose-600 dark:text-rose-400">
          <span className="select-none text-gray-400 dark:text-gray-600">$ </span>git log
          --author=mdrathik
        </p>
        <GithubActivity />
      </Container>

      <Container>
        <Contact />
      </Container>
    </>
  )
}
