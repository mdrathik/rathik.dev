import { Brand } from '~/components/ui/brand'

const ROW_ONE = [
  { name: 'React', key: 'React' },
  { name: 'Next.js', key: 'NextJS' },
  { name: 'TypeScript', key: 'TypeScript' },
  { name: 'JavaScript', key: 'JavaScript' },
  { name: 'Vue.js', key: 'VueJS' },
  { name: 'Nuxt', key: 'NuxtJS' },
  { name: 'Node.js', key: 'Node' },
  { name: 'Laravel', key: 'Laravel' },
  { name: 'Python', key: 'Python' },
  { name: 'Java', key: 'Java' },
  { name: 'Electron', key: 'Electron' },
  { name: 'Prisma', key: 'Prisma' },
] as const

const ROW_TWO = [
  { name: 'MongoDB', key: 'MongoDB' },
  { name: 'MySQL', key: 'MySQL' },
  { name: 'TailwindCSS', key: 'TailwindCSS' },
  { name: 'Bootstrap', key: 'Bootstrap' },
  { name: 'Git', key: 'Git' },
  { name: 'GitHub', key: 'GitHub' },
  { name: 'Docker', key: 'Docker' },
  { name: 'Linux', key: 'Linux' },
  { name: 'Bash', key: 'Bash' },
  { name: 'Vercel', key: 'Vercel' },
  { name: 'VS Code', key: 'VSCode' },
  { name: 'OpenAI', key: 'OpenAI' },
] as const

function MarqueeRow({
  items,
  reverse,
}: {
  items: ReadonlyArray<{ name: string; key: string }>
  reverse?: boolean
}) {
  return (
    <div className="group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div
        className={`flex w-max animate-marquee gap-4 py-2 group-hover:[animation-play-state:paused] ${
          reverse ? '[animation-direction:reverse]' : ''
        }`}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex gap-4 pr-4" aria-hidden={copy > 0}>
            {items.map((tech) => (
              <div
                key={tech.key}
                className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-gray-200/70 bg-white/60 py-2.5 pl-4 pr-5 backdrop-blur-sm transition-colors duration-300 hover:border-rose-400/50 dark:border-gray-800 dark:bg-white/[0.03] dark:hover:border-rose-500/40"
              >
                <Brand name={tech.key} as="icon" className="h-5.5 w-5.5 shrink-0" />
                <span className="font-mono text-sm text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function TechStack() {
  return (
    <div className="space-y-4">
      <MarqueeRow items={ROW_ONE} />
      <MarqueeRow items={ROW_TWO} reverse />
    </div>
  )
}
