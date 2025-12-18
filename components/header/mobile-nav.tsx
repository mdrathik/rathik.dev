'use client'

import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { clsx } from 'clsx'
import { Github, Instagram, Linkedin, Mail, Menu, MessageCircle, X } from 'lucide-react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Link } from '~/components/ui/link'
import { Twemoji } from '~/components/ui/twemoji'
import { HEADER_NAV_LINKS, MORE_NAV_LINKS } from '~/data/navigation'
import { SITE_METADATA } from '~/data/site-metadata'
import { Logo } from './logo'

export function MobileNav() {
  let [navShow, setNavShow] = useState(false)
  let navRef = useRef(null)

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
          'rounded p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700',
          'flex items-center justify-center sm:hidden',
        ])}
        data-umami-event="mobile-nav-toggle"
      >
        <button aria-label="Toggle Menu" onClick={onToggleNav}>
          <Menu size={22} />
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
            <div className="fixed inset-0 z-60 bg-black/25" />
          </TransitionChild>
          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-95"
            leave="transition ease-in duration-200 transform"
            leaveFrom="translate-x-0 opacity-95"
            leaveTo="translate-x-full opacity-0"
            unmount={false}
          >
            <DialogPanel className="fixed left-0 top-0 z-70 h-full w-full bg-white duration-300 dark:bg-gray-950">
              <div className="flex h-full flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 border-b border-gray-200 px-6 py-6 dark:border-gray-800">
                  <Logo />
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    {SITE_METADATA.headerTitle}
                  </span>
                </div>

                {/* Navigation Links */}
                <nav ref={navRef} className="flex-1 overflow-y-auto px-6 py-6">
                  <div className="space-y-1">
                    {[...HEADER_NAV_LINKS, ...MORE_NAV_LINKS].map((link) => (
                      <Link
                        key={link.title}
                        href={link.href}
                        className="flex items-center gap-3 rounded-lg px-3 py-3 text-lg font-semibold text-gray-700 transition-colors hover:bg-gray-100 hover:text-primary-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-primary-400"
                        onClick={onToggleNav}
                      >
                        <Twemoji emoji={link.emoji} />
                        <span>{link.title}</span>
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Contact Section */}
                <div className="border-t border-gray-200 px-6 py-6 dark:border-gray-800">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Get in Touch
                  </p>
                  <a
                    href={`mailto:${SITE_METADATA.email}`}
                    className="mb-4 flex items-center gap-3 text-gray-700 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                  >
                    <Mail size={18} strokeWidth={1.5} />
                    <span className="text-sm">{SITE_METADATA.email}</span>
                  </a>
                  <div className="flex items-center gap-4">
                    <a
                      target="_blank"
                      href={SITE_METADATA.github}
                      rel="noreferrer"
                      className="rounded-full bg-gray-100 p-2.5 text-gray-700 transition-colors hover:bg-primary-100 hover:text-primary-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary-900/30 dark:hover:text-primary-400"
                    >
                      <Github size={20} strokeWidth={1.5} />
                    </a>
                    <a
                      target="_blank"
                      href={SITE_METADATA.linkedin}
                      rel="noreferrer"
                      className="rounded-full bg-gray-100 p-2.5 text-gray-700 transition-colors hover:bg-primary-100 hover:text-primary-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary-900/30 dark:hover:text-primary-400"
                    >
                      <Linkedin size={20} strokeWidth={1.5} />
                    </a>
                    <a
                      target="_blank"
                      href={SITE_METADATA.whatsapp}
                      rel="noreferrer"
                      className="rounded-full bg-gray-100 p-2.5 text-gray-700 transition-colors hover:bg-primary-100 hover:text-primary-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary-900/30 dark:hover:text-primary-400"
                    >
                      <MessageCircle size={20} strokeWidth={1.5} />
                    </a>
                    <a
                      target="_blank"
                      href={SITE_METADATA.instagram}
                      rel="noreferrer"
                      className="rounded-full bg-gray-100 p-2.5 text-gray-700 transition-colors hover:bg-primary-100 hover:text-primary-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary-900/30 dark:hover:text-primary-400"
                    >
                      <Instagram size={20} strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                className="fixed right-4 top-4 z-80 rounded-full bg-gray-100 p-3 text-gray-700 transition-colors hover:bg-gray-200 hover:text-primary-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-primary-400"
                aria-label="Toggle Menu"
                onClick={onToggleNav}
              >
                <X className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  )
}
