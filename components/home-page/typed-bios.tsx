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
        'flex min-h-14 items-start gap-0.5 sm:min-h-8 sm:items-center',
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
        <li>I write clean code. Then the requirements change.</li>
        <li>Frontend bugs. Backend bugs. All lovingly handcrafted.</li>
        <li>Most “simple changes” are three Jira tickets in a trench coat.</li>
        <li>Temporary fixes are permanent fixes with commitment issues.</li>
        <li>I avoid Friday deploys because weekends deserve boundaries.</li>
        <li>Documentation is like cardio. Everyone agrees it is important.</li>
        <li>“Works on my machine” remains a powerful legal defense.</li>
        <li>Based in Dhaka. Available in every inconvenient timezone.</li>
        <li>
          I debug with music because silence makes the bugs louder. <Twemoji emoji="musical-note" />
        </li>
        <li>Some meetings are about the code I would rather be writing.</li>
        <li>Technical debt is just a future sprint asking for revenge.</li>
        <li>My old code taught me humility. Your old code teaches me patience.</li>
      </ul>

      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
