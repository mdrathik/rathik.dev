import clsx from 'clsx'
import { Minus, Plus } from 'lucide-react'
import { Image } from '~/components/ui/image'
import { Link } from '~/components/ui/link'
import { Twemoji } from '~/components/ui/twemoji'
import { GrowingUnderline } from '~/components/ui/growing-underline'

const EXPERIENCES = [
  {
    org: 'CodeCony',
    url: 'https://www.codecony.com',
    logo: '/static/images/codecony.jpg',
    start: 'November 2022',
    end: 'Present',
    title: 'Chief Technical Officer',
    icon: 'briefcase',
    event: 'career-codecony',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Leading the development and implementation of cutting-edge technology solutions for
            clients in various industries.
          </li>
          <li>
            Overseeing the technical direction and strategy, ensuring the successful delivery of
            projects.
          </li>
          <li>
            Managing a team of developers, ensuring that all projects meet quality standards and are
            completed on time.
          </li>
        </ul>
      )
    },
  },
  {
    org: 'bZm Graphics Ltd.',
    url: 'https://www.bzmgraphics.com',
    logo: '/static/images/bzm.png',
    start: 'October 2017',
    end: 'Present',
    title: 'Chief Technical Officer',
    icon: 'briefcase',
    event: 'career-bzm',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Managing the company’s technology strategy and leading large-scale IT projects for
            visual content editing and retouching services.
          </li>
          <li>
            Ensuring that the company's technology stack supports the evolving needs of clients in
            the creative and e-commerce industries.
          </li>
        </ul>
      )
    },
  },

  {
    org: 'Art Tech Technologies (Pvt) Ltd.',
    url: 'https://bd.education',
    logo: '/static/images/artech.png',
    start: 'June 2016',
    end: 'August 2017',
    title: 'Software Engineer',
    icon: 'man-technologist',
    event: 'career-art-tech',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>Performed requirement analysis and application design.</li>
          <li>Developed and optimized programs using PHP and Laravel Applications.</li>
        </ul>
      )
    },
  },
  {
    org: 'MM Communications Limited',
    url: 'http://www.mmclbd.com',
    logo: '/static/images/mmclbd.jpg',
    start: 'July 2015',
    end: 'January 2016',
    title: 'Junior Software Developer',
    icon: 'man-technologist',
    event: 'career-mm-communications',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>Developed & Customized applications, mostly had HTML, CSS -Frontend Related Work</li>
          <li>Developed some small PHP script.</li>
        </ul>
      )
    },
  },
  {
    org: 'Dhaka International University',
    url: 'https://www.diu.edu.bd',
    logo: '/static/images/diu.png',
    start: '2013',
    end: '2017',
    title: 'Bachelor’s in Computer Science and Engineering',
    icon: 'man-student',
    event: 'career-diu',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>Graduated with a focus on software engineering and application development.</li>
        </ul>
      )
    },
  },
]

export function CareerTimeline() {
  return (
    <ul className="m-0 list-none p-0">
      {EXPERIENCES.map((exp, idx) => (
        <li key={exp.url} className="m-0 p-0">
          <TimelineItem exp={exp} last={idx === EXPERIENCES.length - 1} />
        </li>
      ))}
    </ul>
  )
}

function TimelineItem({ exp, last }: { exp: (typeof EXPERIENCES)[0]; last?: boolean }) {
  let { org, title, icon, url, logo, start, end, event, details: Details } = exp
  return (
    <div
      className={clsx(
        'group/timeline-item',
        'relative -mx-3 flex flex-row items-start gap-3 rounded-lg p-3',
        'cursor-pointer bg-transparent transition-colors hover:bg-slate-100 dark:hover:bg-slate-800',
        !last && [
          'before:absolute before:left-9 before:top-15',
          'before:h-full before:w-px',
          'before:bg-gray-300 dark:before:bg-gray-500',
        ]
      )}
    >
      <Image
        src={logo}
        alt={org}
        className="h-12 w-12 shrink-0 rounded-md"
        style={{ objectFit: 'contain' }}
        width={200}
        height={200}
      />
      <details className="w-full [&_.minus]:open:block [&_.plus]:open:hidden">
        <summary className="relative pr-10 marker:content-none">
          <Plus
            size={18}
            className={clsx([
              'plus',
              'group-hover/timeline-item:visible md:invisible',
              'absolute right-1 top-1',
              'transition-transform duration-300 ease-in-out',
              'text-gray-600 dark:text-gray-500',
            ])}
            data-umami-event={`${event}-expand`}
          />
          <Minus
            size={18}
            className={clsx([
              'minus hidden',
              'absolute right-1 top-1',
              'transition-transform duration-300 ease-in-out',
              'text-gray-600 dark:text-gray-500',
            ])}
            data-umami-event={`${event}-collapse`}
          />
          <div className="flex flex-col">
            <div className="line-clamp-1 text-xs tabular-nums text-gray-500 dark:text-gray-400">
              <span>{start}</span> – <span>{end}</span>
            </div>
            <Link
              href={url}
              className="line-clamp-1 w-fit font-semibold text-gray-900 no-underline hover:text-gray-900 dark:text-white dark:hover:text-white"
            >
              <GrowingUnderline data-umami-event={event}>{org}</GrowingUnderline>
            </Link>
            <div className="flex items-center gap-1 pt-1 text-sm text-gray-700 dark:text-gray-200">
              <Twemoji emoji={icon} className="!-mt-1" />
              <span>{title}</span>
            </div>
          </div>
        </summary>
        <div className="pt-1 text-base">
          <Details />
        </div>
      </details>
    </div>
  )
}
