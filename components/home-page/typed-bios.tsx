'use client'

import { clsx } from 'clsx'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { Twemoji } from '~/components/ui/twemoji'

function createTypedInstance(el: HTMLElement) {
  return new Typed(el, {
    stringsElement: '#bios',
    typeSpeed: 40,
    backSpeed: 10,
    loop: true,
    backDelay: 1000,
  })
}

export function TypedBios() {
  let el = useRef(null)
  let typed = useRef<Typed | null>(null)

  useEffect(() => {
    if (el.current) {
      typed.current?.destroy()
      typed.current = createTypedInstance(el.current)
    }
  }, [])

  return (
    <div
      className={clsx([
        'flex min-h-8 items-center gap-0.5',
        [
          '[&_.typed-cursor]:inline-block',
          '[&_.typed-cursor]:w-2',
          '[&_.typed-cursor]:h-5.5',
          '[&_.typed-cursor]:text-transparent',
          '[&_.typed-cursor]:bg-slate-800',
          'dark:[&_.typed-cursor]:bg-slate-100',
        ],
      ])}
    >
      <ul id="bios" className="hidden">
        <li>
          I'm aliased as <span className="font-medium">Rathik</span> at work, but my full name is Md
          Solaiman Hossain.
        </li>
        <li>I'm a learner, builder, and visionary thinker.</li>
        <li>I live in Dhaka, Bangladesh.</li>
        <li>I was born in the beautiful city of Tangail.</li>
        <li>My first programming language I learned was "C".</li>
        <li>I love web development and DevOps technologies.</li>
        <li>I'm focusing on building software and ensuring security.</li>
        <li>I work mostly with Laravel, Tailwind, and Alpine.js.</li>
        <li>I enjoy spending time on Reddit and exploring computer games.</li>
        <li>
          I love listening to songs. <Twemoji emoji="musical-note" />
        </li>
        <li>
          I'm not into outdoor games, but I enjoy staying engaged with technology and creativity.
        </li>
        <li>Love to Redditing a Lot !</li>
        <li>I'm the CTO of CODECONY, driving innovation and growth.</li>
        <li>I aim to accelerate the impact of Industry 4.0</li>
        <li>My vision is to make CODECONY a top outsourcing brand in South Asia.</li>
      </ul>

      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
