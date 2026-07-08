import clsx from 'clsx'
import { ArrowUpRight, Star } from 'lucide-react'
import type { BrandsMap } from '~/components/ui/brand'
import { Brand } from '~/components/ui/brand'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { Image } from '~/components/ui/image'
import { Link } from '~/components/ui/link'
import type { PROJECTS } from '~/data/projects'
import type { GithubRepository } from '~/types/data'

export function ProjectCardList({ project }: { project: (typeof PROJECTS)[0] }) {
  let { title, description, imgSrc, url, repo, builtWith } = project
  let repository = repo as GithubRepository
  let href = repository?.url || url

  return (
    <Link
      href={href || '#'}
      className="group flex items-center gap-4 rounded-2xl border border-gray-200/70 bg-white/60 p-4 no-underline transition-all duration-300 hover:border-rose-400/50 hover:bg-white/90 hover:shadow-[0_0_25px_-10px] hover:shadow-rose-500/30 dark:border-gray-800 dark:bg-white/[0.03] dark:hover:border-rose-500/40 dark:hover:bg-white/[0.06] sm:gap-6 sm:p-5"
      data-umami-event="project-title-link"
    >
      <div className="relative shrink-0 overflow-hidden rounded-xl bg-white p-1.5 ring-1 ring-gray-200/50 transition-transform duration-300 group-hover:scale-105 dark:bg-gray-800 dark:ring-gray-700/50">
        <Image
          src={imgSrc}
          alt={title}
          width={56}
          height={56}
          className="h-12 w-12 object-contain sm:h-14 sm:w-14"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h2 className="truncate text-base font-bold leading-6 sm:text-lg">
          <GrowingUnderline className="transition-colors duration-200 group-hover:text-rose-600 dark:group-hover:text-rose-400">
            {title}
          </GrowingUnderline>
        </h2>
        <p className="mt-0.5 line-clamp-1 text-sm text-gray-600 dark:text-gray-400 sm:line-clamp-2">
          {repository?.description || description}
        </p>
      </div>

      <div className="hidden shrink-0 items-center gap-1.5 md:flex">
        {builtWith?.slice(0, 4).map((tool) => (
          <div
            key={tool}
            className="opacity-70 transition-opacity group-hover:opacity-100"
            title={tool}
          >
            <Brand
              name={tool as keyof typeof BrandsMap}
              iconClassName={clsx(tool === 'Pygame' ? 'h-5' : 'h-5 w-5')}
            />
          </div>
        ))}
      </div>

      {repository ? (
        <div className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 sm:flex">
          <Star size={16} strokeWidth={1.5} />
          {repository.stargazerCount}
        </div>
      ) : null}

      <ArrowUpRight
        size={20}
        strokeWidth={1.5}
        className="shrink-0 text-gray-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-rose-500 dark:text-gray-600 dark:group-hover:text-rose-400"
      />
    </Link>
  )
}
