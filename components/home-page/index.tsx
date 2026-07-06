import { Container } from '~/components/ui/container'
import { Brand } from '~/components/ui/brand'
import { Contact } from './contact'
import { FocusAreas } from './focus-areas'
import { Hero, HeroSignals } from './hero'

const TECH_STACK = [
  { name: 'React', key: 'React' },
  { name: 'Next.js', key: 'NextJS' },
  { name: 'TypeScript', key: 'TypeScript' },
  { name: 'Node.js', key: 'Node' },
  { name: 'Laravel', key: 'Laravel' },
  { name: 'Python', key: 'Python' },
  { name: 'MongoDB', key: 'MongoDB' },
  { name: 'MySQL', key: 'MySQL' },
  { name: 'TailwindCSS', key: 'TailwindCSS' },
  { name: 'Git', key: 'Git' },
  { name: 'Docker', key: 'Docker' },
  { name: 'Linux', key: 'Linux' },
  { name: 'Bash', key: 'Bash' },
  { name: 'Prisma', key: 'Prisma' },
] as const

export function Home() {
  return (
    <>
      <Container as="div" className="pt-10 lg:pt-20">
        <Hero />
        <HeroSignals />
        <FocusAreas />
      </Container>

      {/* Tech Stack - Collage Style */}
      <div className="py-6 md:py-10">
        <Container>
          <p className="mb-8 font-mono text-sm text-rose-600 dark:text-rose-400">
            <span className="select-none text-gray-400 dark:text-gray-600">$ </span>ls stack/
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {TECH_STACK.map((tech, idx) => (
              <div
                key={tech.key}
                className="group relative"
                style={{
                  transform: `rotate(${idx % 2 === 0 ? -3 : 3}deg)`,
                }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl dark:bg-gray-800 dark:shadow-[0_0_20px_-6px] dark:shadow-rose-500/20 md:h-20 md:w-20 md:p-4">
                  <Brand name={tech.key} as="icon" className="h-full w-full" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Container>
        <Contact />
      </Container>
    </>
  )
}
