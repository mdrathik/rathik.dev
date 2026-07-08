'use client'

import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { clsx } from 'clsx'
import { Github, Instagram, Linkedin, Mail, Menu, MessageCircle, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Link } from '~/components/ui/link'
import { HEADER_NAV_LINKS, MORE_NAV_LINKS } from '~/data/navigation'
import { SITE_METADATA } from '~/data/site-metadata'
import { Logo } from './logo'

export function MobileNav() {
  let [navShow, setNavShow] = useState(false)
  let navRef = useRef(null)
  let pathname = usePathname()

  let onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        enableBodyScroll(navRef.current)
      } else {
        // Prevent scrolling
        disableBodyScroll(navRef.current)
      }
      return !status
    })
  }

  useEffect(() => {
    return clearAllBodyScrollLocks
  })

  return (
    <>
      <div
        className={clsx([
          'rounded-full p-1.5 text-gray-600 transition-colors hover:bg-rose-50 hover:text-rose-600',
          'dark:text-gray-300 dark:hover:bg-rose-950/40 dark:hover:text-rose-400',
          'flex items-center justify-center sm:hidden',
        ])}
        data-umami-event="mobile-nav-toggle"
      >
        <button aria-label="Toggle Menu" onClick={onToggleNav}>
          <Menu size={22} strokeWidth={1.75} />
        </button>
      </div>
      <Transition appear show={navShow} as={Fragment} unmount={false}>
        <Dialog as="div" onClose={onToggleNav} unmount={false}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            unmount={false}
          >
            <div className="fixed inset-0 z-60 bg-black/40 backdrop-blur-sm" />
          </TransitionChild>
          <TransitionChild
            as={Fragment}
            enter="transition ease-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in duration-200 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
            unmount={false}
          >
            <DialogPanel className="fixed right-0 top-0 z-70 h-full w-[85%] max-w-sm border-l border-gray-100 bg-white shadow-2xl shadow-black/10 duration-300 dark:border-gray-800 dark:bg-dark">
              <div className="flex h-full flex-col">
                {/* Header */}
                <div className="flex items-center justify-between gap-3 border-b border-gray-100 px-5 py-5 dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <Logo />
                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                      {SITE_METADATA.headerTitle}
                    </span>
                  </div>
                  <button
                    className="rounded-full p-2 text-gray-500 transition-colors hover:bg-rose-50 hover:text-rose-600 dark:text-gray-400 dark:hover:bg-rose-950/40 dark:hover:text-rose-400"
                    aria-label="Toggle Menu"
                    onClick={onToggleNav}
                  >
                    <X size={20} strokeWidth={1.75} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav ref={navRef} className="flex-1 overflow-y-auto px-4 py-5">
                  <div className="space-y-1">
                    {[...HEADER_NAV_LINKS, ...MORE_NAV_LINKS].map(({ href, title, icon: Icon }) => {
                      let isActive = pathname.startsWith(href)
                      return (
                        <Link
                          key={title}
                          href={href}
                          className={clsx(
                            'flex items-center gap-3 rounded-xl px-3 py-2.5 font-semibold transition-colors',
                            isActive
                              ? 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400'
                              : 'text-gray-700 hover:bg-gray-100 hover:text-rose-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-rose-400'
                          )}
                          onClick={onToggleNav}
                        >
                          <Icon size={19} strokeWidth={1.75} />
                          <span>{title}</span>
                        </Link>
                      )
                    })}
                  </div>
                </nav>

                {/* Contact Section */}
                <div className="border-t border-gray-100 px-5 py-5 dark:border-gray-800">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Get in Touch
                  </p>
                  <a
                    href={`mailto:${SITE_METADATA.email}`}
                    className="mb-4 flex items-center gap-3 text-gray-700 transition-colors hover:text-rose-600 dark:text-gray-300 dark:hover:text-rose-400"
                  >
                    <Mail size={18} strokeWidth={1.5} />
                    <span className="text-sm">{SITE_METADATA.email}</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <a
                      target="_blank"
                      href={SITE_METADATA.github}
                      rel="noreferrer"
                      className="rounded-full bg-gray-100 p-2.5 text-gray-700 transition-colors hover:bg-rose-100 hover:text-rose-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-rose-900/30 dark:hover:text-rose-400"
                    >
                      <Github size={18} strokeWidth={1.5} />
                    </a>
                    <a
                      target="_blank"
                      href={SITE_METADATA.linkedin}
                      rel="noreferrer"
                      className="rounded-full bg-gray-100 p-2.5 text-gray-700 transition-colors hover:bg-rose-100 hover:text-rose-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-rose-900/30 dark:hover:text-rose-400"
                    >
                      <Linkedin size={18} strokeWidth={1.5} />
                    </a>
                    <a
                      target="_blank"
                      href={SITE_METADATA.whatsapp}
                      rel="noreferrer"
                      className="rounded-full bg-gray-100 p-2.5 text-gray-700 transition-colors hover:bg-rose-100 hover:text-rose-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-rose-900/30 dark:hover:text-rose-400"
                    >
                      <MessageCircle size={18} strokeWidth={1.5} />
                    </a>
                    <a
                      target="_blank"
                      href={SITE_METADATA.instagram}
                      rel="noreferrer"
                      className="rounded-full bg-gray-100 p-2.5 text-gray-700 transition-colors hover:bg-rose-100 hover:text-rose-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-rose-900/30 dark:hover:text-rose-400"
                    >
                      <Instagram size={18} strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  )
}
