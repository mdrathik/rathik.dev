'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { SpotifyNowPlaying } from '~/components/ui/now-playing'
import { SITE_METADATA } from '~/data/site-metadata'

const COMMANDS = {
  neofetch: 'Show system info (the dev flex)',
  help: 'Show available commands',
  'sudo hire-me': 'You know you want to',
  joke: 'Random dev joke',
  ls: 'List directory contents',
  cd: 'Change directory (try "cd projects")',
  theme: 'Change theme (try "theme dracula")',
  about: 'Display information about me',
  contact: 'List contact information',
  clear: 'Clear terminal screen',
}

const JOKES = [
  'Why do programmers prefer dark mode? Because light attracts bugs. 🐛',
  '99 little bugs in the code, 99 little bugs... take one down, patch it around, 127 little bugs in the code.',
  "A SQL query walks into a bar, goes up to two tables and asks: 'Can I JOIN you?'",
  'There are only two hard things in CS: cache invalidation, naming things, and off-by-one errors.',
  "!false — it's funny because it's true.",
  'A CTO, a deadline, and a coffee walk into a bar. The coffee never made it out.',
  "Documentation is like a love letter you write to your future self. Mine says 'good luck'. 📝",
  'It works on my machine. — every developer, moments before disaster',
]

const FILES = {
  'intro.txt': (
    <div className="space-y-4">
      <p>
        I'm Md Solaiman Hossain (alias Rathik at work), a software developer with over 8+ years of
        experience in full-stack and web development.
      </p>
      <p>
        I love solving problems, building innovative solutions, and staying updated with the latest
        technologies.
      </p>
    </div>
  ),
  'contact.txt': 'Email: hello@rathik.dev\nGithub: @mdrathik',
}

const DIRECTORIES = ['blog', 'snippets', 'projects', 'about', 'tags']

const DEMO_COMMANDS = ['neofetch', 'sudo hire-me', 'joke', 'cat intro.txt', 'help']

const QUICK_COMMANDS = ['neofetch', 'sudo hire-me', 'joke', 'theme dracula', 'help']

const THEMES = {
  classic: {
    bg: 'bg-[#1e1e1e]',
    headerBg: 'bg-[#2d2d2d]',
    text: 'text-gray-300',
    muted: 'text-gray-500',
    user: 'text-green-400',
    path: 'text-blue-400',
    input: 'text-gray-300',
    dots: ['bg-red-500', 'bg-yellow-500', 'bg-green-500'],
  },
  tokyo: {
    bg: 'bg-[#1a1b26]',
    headerBg: 'bg-[#16161e]',
    text: 'text-[#a9b1d6]',
    muted: 'text-[#565f89]',
    user: 'text-[#bb9af7]',
    path: 'text-[#7aa2f7]',
    input: 'text-[#c0caf5]',
    dots: ['bg-[#f7768e]', 'bg-[#e0af68]', 'bg-[#9ece6a]'],
  },
  dracula: {
    bg: 'bg-[#282a36]',
    headerBg: 'bg-[#21222c]',
    text: 'text-[#f8f8f2]',
    muted: 'text-[#6272a4]',
    user: 'text-[#ff79c6]',
    path: 'text-[#8be9fd]',
    input: 'text-[#f8f8f2]',
    dots: ['bg-[#ff5555]', 'bg-[#f1fa8c]', 'bg-[#50fa7b]'],
  },
  matrix: {
    bg: 'bg-black',
    headerBg: 'bg-green-900',
    text: 'text-green-500',
    muted: 'text-green-800',
    user: 'text-green-400',
    path: 'text-green-600',
    input: 'text-green-300',
    dots: ['bg-green-600', 'bg-green-500', 'bg-green-400'],
  },
  onedark: {
    bg: 'bg-[#282c34]',
    headerBg: 'bg-[#21252b]',
    text: 'text-[#abb2bf]',
    muted: 'text-[#5c6370]',
    user: 'text-[#61afef]',
    path: 'text-[#98c379]',
    input: 'text-[#abb2bf]',
    dots: ['bg-[#e06c75]', 'bg-[#d19a66]', 'bg-[#98c379]'],
  },
}

type ThemeKey = keyof typeof THEMES

const NEOFETCH_ASCII = `   ____  ______
  / __ \\/_  __/
 / /_/ / / /
/ _, _/ / /
/_/ |_| /_/`

function Neofetch() {
  const rows: Array<[string, React.ReactNode]> = [
    ['OS', 'Dhaka, Bangladesh 🇧🇩'],
    ['Host', 'CODECONY (CTO edition)'],
    ['Kernel', 'full-stack v8.0+ (LTS since 2017)'],
    ['Uptime', '8+ years in production, zero burnout crashes'],
    ['Shell', 'bash, artisan & occasional YOLO deploys'],
    ['Packages', 'laravel, next.js, node, docker, linux'],
    ['IDE', 'VSCode + vim (when I get trapped)'],
    ['Memory', '90% Claude & OpenAI, 10% original thoughts'],
    ['Caffeine', '▓▓▓▓▓▓▓▓▓░ 98%'],
  ]
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-3">
      <pre className="hidden shrink-0 text-pink-400 sm:block">{NEOFETCH_ASCII}</pre>
      <div className="min-w-0 space-y-0.5">
        <p>
          <span className="font-bold text-green-400">guest</span>@
          <span className="font-bold text-blue-400">rathik.dev</span>
        </p>
        <p className="text-gray-500">─────────────────────</p>
        {rows.map(([label, value]) => (
          <p key={label} className="break-words">
            <span className="font-bold text-yellow-400">{label}</span>
            <span className="text-gray-500">: </span>
            {value}
          </p>
        ))}
        <p className="pt-1">
          <span className="inline-block h-3 w-3 bg-red-500" />
          <span className="inline-block h-3 w-3 bg-yellow-500" />
          <span className="inline-block h-3 w-3 bg-green-500" />
          <span className="inline-block h-3 w-3 bg-blue-500" />
          <span className="inline-block h-3 w-3 bg-purple-500" />
          <span className="inline-block h-3 w-3 bg-pink-500" />
        </p>
      </div>
    </div>
  )
}

export function Terminal() {
  const router = useRouter()
  const [history, setHistory] = useState<Array<{ command: string; output: React.ReactNode }>>([])
  const [input, setInput] = useState('')
  const [isDemoMode, setIsDemoMode] = useState(true)
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>('classic')
  const [commandLog, setCommandLog] = useState<string[]>([])
  const [logIndex, setLogIndex] = useState(-1)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Ref to track demo mode status across async operations
  const isDemoRef = useRef(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const theme = THEMES[currentTheme]

  const processCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    let output: React.ReactNode = ''

    if (trimmedCmd === '') {
      output = ''
    } else if (trimmedCmd === 'help' || trimmedCmd === '--help') {
      output = (
        <div className="space-y-2 text-gray-300">
          <p>Available commands:</p>
          {Object.entries(COMMANDS).map(([key, desc]) => (
            <div key={key} className="grid grid-cols-[110px_1fr] gap-4">
              <span className="text-primary-400">{key}</span>
              <span>{desc}</span>
            </div>
          ))}
          <p className="mt-2 text-gray-400">
            Psst — there are hidden commands too. Try 'vim', 'hack', or 'git status'. 👀
          </p>
        </div>
      )
    } else if (trimmedCmd === 'neofetch') {
      output = <Neofetch />
    } else if (trimmedCmd.startsWith('theme')) {
      const args = trimmedCmd.split(' ')
      if (args.length === 1) {
        output = `Current theme: ${currentTheme}. Available themes: ${Object.keys(THEMES).join(', ')}`
      } else {
        const newTheme = args[1] as ThemeKey
        if (THEMES[newTheme]) {
          setCurrentTheme(newTheme)
          output = `Theme switched to ${newTheme} ✨`
        } else {
          output = `Theme '${newTheme}' not found. Available: ${Object.keys(THEMES).join(', ')}`
        }
      }
    } else if (trimmedCmd === 'clear') {
      setHistory([])
      return
    } else if (trimmedCmd === 'ls' || trimmedCmd === 'ls -la') {
      output = (
        <div className="space-y-2">
          <div className="flex flex-wrap gap-4">
            {DIRECTORIES.map((dir) => (
              <span key={dir} className="font-bold text-blue-400">
                {dir}/
              </span>
            ))}
            {Object.keys(FILES).map((file) => (
              <span key={file} className="text-gray-300">
                {file}
              </span>
            ))}
            {trimmedCmd === 'ls -la' && <span className="text-gray-500">.hire-me-plz</span>}
          </div>
          <p className="text-gray-500">Tip: 'cd projects' actually takes you there.</p>
        </div>
      )
    } else if (trimmedCmd === 'about') {
      output = (
        <div className="space-y-1">
          <p>Name: Md Solaiman Hossain (Rathik)</p>
          <p>Role: CTO at CODECONY</p>
          <p>Location: Dhaka, Bangladesh 🇧🇩</p>
          <p className="text-gray-400">Run 'neofetch' for the full spec sheet.</p>
        </div>
      )
    } else if (trimmedCmd === 'whoami') {
      output = "guest@rathik.dev — but the real question is, who am I? Try 'neofetch'"
    } else if (
      trimmedCmd === 'sudo hire-me' ||
      trimmedCmd === 'hire-me' ||
      trimmedCmd === 'hire me'
    ) {
      output = (
        <div className="space-y-1">
          <p className="text-green-400">[sudo] permission granted ✔</p>
          <p>Initializing collaboration protocol...</p>
          <p>
            ▓▓▓▓▓▓▓▓▓▓ 100% — Ready! Email{' '}
            <a href={`mailto:${SITE_METADATA.email}`} className="text-blue-400 hover:underline">
              {SITE_METADATA.email}
            </a>{' '}
            and let's build something. 🚀
          </p>
        </div>
      )
    } else if (trimmedCmd === 'joke') {
      output = JOKES[Math.floor(Math.random() * JOKES.length)]
    } else if (trimmedCmd === 'git status') {
      output = (
        <div className="space-y-1">
          <p>On branch main</p>
          <p>Your life is ahead of 'comfort-zone' by 8+ commits.</p>
          <p className="text-green-400">nothing to regret, working tree clean ✔</p>
        </div>
      )
    } else if (trimmedCmd === 'vim' || trimmedCmd === 'vi' || trimmedCmd === 'nano') {
      output = (
        <span>
          You are now trapped in vim. Type <span className="text-yellow-400">:q!</span> to escape.
          Good luck. 🙏
        </span>
      )
    } else if (trimmedCmd === ':q!' || trimmedCmd === ':wq' || trimmedCmd === ':q') {
      output = 'Phew, you escaped vim! You are officially a developer. 🎓'
    } else if (trimmedCmd === 'hack' || trimmedCmd === 'hack the planet') {
      output = (
        <div className="space-y-1">
          <p>Accessing mainframe...</p>
          <p>Bypassing firewall... ▓▓▓▓▓▓░░░░ 60%</p>
          <p className="text-red-500">ACCESS DENIED.</p>
          <p className="text-gray-400">
            Nice try, Mr. Robot. The only backdoor here is 'contact'. 😎
          </p>
        </div>
      )
    } else if (trimmedCmd === 'ping') {
      output = 'pong 🏓 (latency: 1ms — I reply to emails almost as fast)'
    } else if (trimmedCmd.startsWith('cd ')) {
      const dir = trimmedCmd.replace('cd ', '').trim()
      if (DIRECTORIES.includes(dir)) {
        output = `Navigating to /${dir}...`
        setTimeout(() => {
          router.push(`/${dir === 'about' ? 'about' : dir}`)
        }, 800)
      } else if (dir === '..') {
        output = 'You are already at home'
      } else {
        output = `cd: ${dir}: No such file or directory`
      }
    } else if (trimmedCmd.startsWith('cat ')) {
      const fileName = trimmedCmd.replace('cat ', '').trim()
      if (FILES[fileName as keyof typeof FILES]) {
        output = FILES[fileName as keyof typeof FILES]
      } else if (fileName === '.hire-me-plz') {
        output = "You found the hidden file! The secret is: run 'sudo hire-me' 🤫"
      } else {
        output = `cat: ${fileName}: No such file or directory`
      }
    } else if (trimmedCmd === 'sudo rm -rf /') {
      output = (
        <span className="font-bold text-red-500">
          Nice try! I need this website to stay online. 😅
        </span>
      )
    } else if (trimmedCmd === 'exit') {
      output = 'Where are you going? The fun is just getting started!'
    } else if (trimmedCmd === 'date') {
      output = `Current date: ${new Date().toLocaleDateString()} - The best day to code!`
    } else if (trimmedCmd === 'coffee') {
      output = '☕ Brewing... 100% — this is how the site stays online.'
    } else if (trimmedCmd === 'love') {
      output = '❤️ Made with love by Rathik'
    } else if (trimmedCmd === 'contact') {
      output = (
        <div className="space-y-2">
          <div className="grid grid-cols-[100px_1fr] gap-1">
            <span className="text-gray-400">Email:</span>
            <a href={`mailto:${SITE_METADATA.email}`} className="text-blue-400 hover:underline">
              {SITE_METADATA.email}
            </a>

            <span className="text-gray-400">GitHub:</span>
            <a
              href={SITE_METADATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              @mdrathik
            </a>

            <span className="text-gray-400">LinkedIn:</span>
            <a
              href={SITE_METADATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Md Rathik
            </a>

            <span className="text-gray-400">Twitter:</span>
            <a
              href={SITE_METADATA.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              @mdrathik
            </a>
          </div>
        </div>
      )
    } else {
      output = `Command not found: ${trimmedCmd}. Type 'help' (or smash the buttons below 👇)`
    }

    setHistory((prev) => [...prev, { command: cmd, output }])
    if (trimmedCmd !== '') {
      setCommandLog((prev) => [...prev, cmd])
    }
    setLogIndex(-1)
  }

  const stopDemo = () => {
    if (!isDemoRef.current) return
    isDemoRef.current = false
    setIsDemoMode(false)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setInput('')
    inputRef.current?.focus()
  }

  const runQuickCommand = (cmd: string) => {
    stopDemo()
    processCommand(cmd)
    setInput('')
    inputRef.current?.focus()
  }

  // Auto-typing demo loop
  useEffect(() => {
    isDemoRef.current = true
    let cmdIndex = 0

    const typeCharacter = async (text: string) => {
      for (let i = 0; i <= text.length; i++) {
        if (!isDemoRef.current) return
        setInput(text.slice(0, i))
        await new Promise((resolve) => {
          timeoutRef.current = setTimeout(resolve, 50)
        })
      }
    }

    const runDemoLoop = async () => {
      if (!isDemoRef.current) return

      const cmd = DEMO_COMMANDS[cmdIndex % DEMO_COMMANDS.length]

      // Type command
      await typeCharacter(cmd)
      if (!isDemoRef.current) return

      // Execute delay
      await new Promise((resolve) => {
        timeoutRef.current = setTimeout(resolve, 500)
      })
      if (!isDemoRef.current) return

      processCommand(cmd)
      setInput('')
      cmdIndex++

      // Wait before next command
      const delay = cmdIndex >= 2 ? 10000 : 5000
      await new Promise((resolve) => {
        timeoutRef.current = setTimeout(resolve, delay)
      })

      if (isDemoRef.current) {
        runDemoLoop()
      }
    }

    // Start delay
    timeoutRef.current = setTimeout(runDemoLoop, 1000)

    return () => {
      isDemoRef.current = false
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history, input])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isDemoRef.current) {
      stopDemo()
      return
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandLog.length === 0) return
      const newIndex = logIndex === -1 ? commandLog.length - 1 : Math.max(0, logIndex - 1)
      setLogIndex(newIndex)
      setInput(commandLog[newIndex])
      return
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (logIndex === -1) return
      const newIndex = logIndex + 1
      if (newIndex >= commandLog.length) {
        setLogIndex(-1)
        setInput('')
      } else {
        setLogIndex(newIndex)
        setInput(commandLog[newIndex])
      }
      return
    }

    if (e.key === 'Tab') {
      e.preventDefault()
      const trimmedInput = input.trim()
      const parts = trimmedInput.split(' ')

      if (parts.length === 1) {
        // Autocomplete command
        const availableCommands = [
          ...Object.keys(COMMANDS),
          'cat',
          'cd',
          'ls',
          'whoami',
          'clear',
          'sudo',
          'date',
          'exit',
          'coffee',
          'love',
          'neofetch',
          'joke',
          'vim',
          'hack',
          'ping',
        ]
        const match = availableCommands.find((cmd) => cmd.startsWith(trimmedInput))
        if (match) {
          setInput(match)
        }
      } else if (parts.length === 2) {
        // Autocomplete usage
        const cmd = parts[0]
        const arg = parts[1]

        if (cmd === 'cat') {
          const files = Object.keys(FILES)
          const match = files.find((f) => f.startsWith(arg))
          if (match) setInput(`${cmd} ${match}`)
        } else if (cmd === 'cd') {
          const match = DIRECTORIES.find((d) => d.startsWith(arg))
          if (match) setInput(`${cmd} ${match}`)
        } else if (cmd === 'theme') {
          const match = Object.keys(THEMES).find((t) => t.startsWith(arg))
          if (match) setInput(`${cmd} ${match}`)
        }
      }
      return
    }

    if (e.key === 'Enter') {
      processCommand(input)
      setInput('')
    }
  }

  const handleTerminalClick = () => {
    if (isDemoRef.current) {
      stopDemo()
    }
    inputRef.current?.focus()
  }

  return (
    <div
      className={`overflow-hidden rounded-xl border border-gray-800 shadow-2xl shadow-rose-500/10 dark:border-gray-700 ${theme.bg}`}
      onClick={handleTerminalClick}
    >
      <div className={`border-b border-gray-800 px-4 py-2 ${theme.headerBg}`}>
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className={`h-3 w-3 rounded-full ${theme.dots[0]}`}></div>
            <div className={`h-3 w-3 rounded-full ${theme.dots[1]}`}></div>
            <div className={`h-3 w-3 rounded-full ${theme.dots[2]}`}></div>
          </div>
          <div className="flex-1 text-center font-mono text-xs text-gray-400 md:text-sm">
            guest@rathik.dev: ~{' '}
            <span className="hidden text-gray-500 md:inline">— zsh (kidding, it's bash)</span>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className={`scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700 h-[60vh] overflow-y-auto p-4 font-mono text-xs md:h-[500px] md:text-sm ${theme.text}`}
      >
        <div className={`mb-4 ${theme.muted}`}>
          Welcome to RT's Terminal v2.0 — now with 40% more jokes.
          <br />
          Type 'help', or just watch me type for you. 🍿
        </div>

        {history.map((entry, i) => (
          <div key={i} className={`mb-4 break-words antialiased ${theme.text}`}>
            <div className="mb-1 break-all md:break-words">
              <span className={theme.user}>
                <span className="md:hidden">guest</span>
                <span className="hidden md:inline">guest@rathik.dev</span>
              </span>
              :<span className={theme.path}>~</span>$ {entry.command}
            </div>
            <div className="whitespace-pre-wrap break-words">{entry.output}</div>
          </div>
        ))}

        <div className="flex items-center">
          <span className={theme.user}>
            <span className="md:hidden">guest</span>
            <span className="hidden md:inline">guest@rathik.dev</span>
          </span>
          :<span className={theme.path}>~</span>$
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => {
              if (isDemoRef.current) stopDemo()
              setInput(e.target.value)
            }}
            onKeyDown={handleKeyDown}
            className={`ml-2 min-w-0 flex-1 border-none bg-transparent p-0 outline-none focus:ring-0 ${theme.input} placeholder-transparent`}
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
        </div>
      </div>

      <div
        className={`flex flex-wrap items-center gap-2 border-t border-gray-800 px-4 py-2.5 ${theme.headerBg}`}
      >
        <span className={`font-mono text-[10px] uppercase tracking-wider ${theme.muted}`}>
          try:
        </span>
        {QUICK_COMMANDS.map((cmd) => (
          <button
            key={cmd}
            onClick={(e) => {
              e.stopPropagation()
              runQuickCommand(cmd)
            }}
            className={`rounded-md border border-gray-700 px-2 py-0.5 font-mono text-[11px] transition-colors duration-150 hover:border-rose-500/60 hover:text-rose-400 md:text-xs ${theme.muted}`}
            data-umami-event={`terminal-quick-${cmd.replace(/\s+/g, '-')}`}
          >
            {cmd}
          </button>
        ))}
      </div>

      <div className={`border-t border-gray-800 px-4 py-2 ${theme.headerBg}`}>
        <SpotifyNowPlaying className={`text-xs ${theme.muted}`} />
      </div>
    </div>
  )
}
