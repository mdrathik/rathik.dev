import type { Blog, Snippet } from '~/.contentlayer/generated'
import { Container } from '~/components/ui/container'
import type { CoreContent } from '~/types/data'
import { Brand } from '~/components/ui/brand'
import { Terminal } from './terminal'

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

export function Home({
  posts,
  snippets,
}: {
  posts: CoreContent<Blog>[]
  snippets: CoreContent<Snippet>[]
}) {
  return (
    <>
      <Container as="div" className="pt-4 lg:pt-12">
        <div className="py-6 md:pb-8">
          <div className="space-y-4 md:space-y-6">
            <div className="text-base leading-7 text-gray-600 dark:text-gray-400 md:text-lg md:leading-8">
              <Terminal />
            </div>
          </div>
        </div>
      </Container>

      {/* Tech Stack - Collage Style */}
      <div className="py-12 md:py-16">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {TECH_STACK.map((tech, idx) => (
              <div
                key={tech.key}
                className="group relative"
                style={{
                  transform: `rotate(${idx % 2 === 0 ? -3 : 3}deg)`,
                }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl dark:bg-gray-800 md:h-20 md:w-20 md:p-4">
                  <Brand name={tech.key} as="icon" className="h-full w-full" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  )
}
