'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { GitHubCalendar } from 'react-github-calendar'

// Official GitHub contribution graph colors
const GITHUB_THEME = {
  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
}

export function GithubActivity() {
  let { resolvedTheme } = useTheme()
  let [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="h-32" />

  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200/70 bg-white/60 p-5 backdrop-blur-sm dark:border-gray-800 dark:bg-white/[0.03] md:p-6 [&_.react-activity-calendar]:mx-auto [&_.react-activity-calendar__calendar]:-scale-x-100 [&_.react-activity-calendar__legend-month_text]:-scale-x-100 [&_.react-activity-calendar__legend-month_text]:[transform-box:fill-box] [&_.react-activity-calendar__legend-month_text]:[transform-origin:center]">
      <GitHubCalendar
        username="mdrathik"
        colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
        theme={GITHUB_THEME}
        blockRadius={3}
        fontSize={12}
      />
    </div>
  )
}
