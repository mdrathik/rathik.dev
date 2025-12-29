import { genPageMetadata } from 'app/seo'
import { ProjectCard } from '~/components/cards/project'
import { Container } from '~/components/ui/container'
import { PageHeader } from '~/components/ui/page-header'
import { PROJECTS } from '~/data/projects'
import { fetchRepoData } from '~/utils/github'

export let metadata = genPageMetadata({ title: 'Projects' })

export default async function Projects() {
  await Promise.all(
    PROJECTS.map(async (p) => {
      if (p.repo) {
        p.repo = await fetchRepoData({ repo: p.repo as string })
      }
    })
  )
  let workProjects = PROJECTS.filter(({ type }) => type === 'work')
  let sideProjects = PROJECTS.filter(({ type }) => type === 'self')

  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="Projects"
        description="Collections of my open-source side projects, along with some cool things I've built with colleagues at work. It's a mix of passion projects and practical tools—some just for fun, others to solve real-world problems."
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="py-6 md:py-10">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-1 w-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400" />
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-3xl">
            Work
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {workProjects.map((pro) => (
            <ProjectCard key={pro.title} project={pro} />
          ))}
        </div>
      </div>
      <div className="border-t border-gray-200 py-6 dark:border-gray-700 md:py-10">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-1 w-10 rounded-full bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400" />
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-3xl">
            Side projects
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {sideProjects.map((pro) => (
            <ProjectCard key={pro.title} project={pro} />
          ))}
        </div>
      </div>
    </Container>
  )
}
