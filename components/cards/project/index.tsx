import clsx from 'clsx'
import { Github } from 'lucide-react'
import { Fragment } from 'react'
import type { BrandsMap } from '~/components/ui/brand'
import { Brand } from '~/components/ui/brand'
import { GradientBorder } from '~/components/ui/gradient-border'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { Image } from '~/components/ui/image'
import { Link } from '~/components/ui/link'
import { TiltedGridBackground } from '~/components/ui/tilted-grid-background'
import type { PROJECTS } from '~/data/projects'
import type { GithubRepository } from '~/types/data'

export function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  let { title, description, imgSrc, url, repo, builtWith, links } = project
  let repository = repo as GithubRepository
  let href = repository?.url || url
  let lang = repository?.languages?.[0]

  return (
    <GradientBorder
      offset={28}
      className="group flex flex-col rounded-[32px] p-5 transition-all duration-300 ease-out [box-shadow:0_8px_32px_rgba(194,194,218,.3)] hover:scale-[1.01] hover:[box-shadow:0_12px_48px_rgba(194,194,218,.4)] dark:bg-white/5 dark:shadow-none dark:hover:[box-shadow:0_12px_48px_rgba(255,255,255,.05)] md:p-6"
    >
      <TiltedGridBackground className="inset-0 z-[-1] rounded-[32px]" />
      <div className="mb-4 flex items-center gap-3">
        <div className="relative shrink-0 overflow-hidden rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-gray-200/50 transition-transform duration-300 group-hover:scale-105 dark:bg-gray-800 dark:ring-gray-700/50">
          <Image
            src={imgSrc}
            alt={title}
            width={64}
            height={64}
            className="h-16 w-16 object-contain"
          />
        </div>
        <div className="flex flex-col items-start gap-1 pt-1">
          <h2 className="text-xl font-bold leading-7 transition-colors duration-200">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                <GrowingUnderline
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text transition-all duration-200 group-hover:text-transparent dark:from-blue-400 dark:to-purple-400"
                  data-umami-event="project-title-link"
                >
                  {title}
                </GrowingUnderline>
              </Link>
            ) : (
              title
            )}
          </h2>
        </div>
      </div>
      <p className="mb-8 line-clamp-2 grow text-base leading-relaxed text-gray-700 dark:text-gray-300">
        {repository?.description || description}
      </p>
      <div
        className={clsx(
          'mt-auto flex gap-6 sm:gap-9 md:grid md:gap-0',
          repository ? 'grid-cols-3' : 'grid-cols-2'
        )}
      >
        {repository ? (
          <div className="space-y-1.5">
            <div className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              <span className="hidden sm:inline">Github stars</span>
              <span className="sm:hidden">Stars</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center space-x-1.5">
                <Github size={18} strokeWidth={1.5} className="text-gray-600 dark:text-gray-400" />
                <span className="text-lg font-semibold">{repository?.stargazerCount}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-1.5">
            <div className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Links
            </div>
            <div className="flex flex-col items-start gap-0.5 sm:flex-row sm:items-center sm:gap-1.5">
              {links?.map(({ title, url }, idx) => (
                <Fragment key={url}>
                  <Link href={url} className="flex items-center gap-1.5">
                    <GrowingUnderline
                      className="font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                      data-umami-event="project-link"
                    >
                      {title}
                    </GrowingUnderline>
                  </Link>
                  {idx !== links.length - 1 && (
                    <span className="hidden text-gray-400 dark:text-gray-500 md:inline">|</span>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        )}
        <div className="space-y-1.5">
          <div className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Stack
          </div>
          <div className="flex h-6 flex-wrap items-center gap-1.5">
            {builtWith?.map((tool) => {
              return (
                <div
                  key={tool}
                  className="transition-transform duration-200 hover:scale-110"
                  title={tool}
                >
                  <Brand
                    name={tool as keyof typeof BrandsMap}
                    iconClassName={clsx(tool === 'Pygame' ? 'h-6' : 'h-6 w-6')}
                  />
                </div>
              )
            })}
          </div>
        </div>
        {lang && (
          <div className="space-y-1.5">
            <div className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Language
            </div>
            <div className="flex items-center gap-1.5">
              <Brand name={lang.name as keyof typeof BrandsMap} as="icon" className="h-5 w-5" />
              <span className="font-semibold">{lang.name}</span>
            </div>
          </div>
        )}
      </div>
    </GradientBorder>
  )
}
