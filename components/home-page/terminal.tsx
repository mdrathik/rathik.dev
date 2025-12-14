'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { SpotifyNowPlaying } from '~/components/ui/now-playing'

const COMMANDS = {
  help: 'Show available commands',
  whoami: 'Display current user',
  ls: 'List directory contents',
  cd: 'Change directory',
  theme: 'Change theme (try "theme dracula")',
  clear: 'Clear terminal screen',
  about: 'Display information about me',
}

const FILES = {
  'intro.txt': (
    <div className="space-y-4">
      <p>I started learning to code in 2016, and it has been an exciting journey ever since.</p>
      <p>
        I landed my first role in tech as a PHP developer, where I discovered my love for
        problem-solving & Many others stuff.
      </p>
      <p>I have a passion for web development, Laravel, and exploring secure software solutions.</p>
      <p>I started this platform to document and share my knowledge, experiences, and insights.</p>
    </div>
  ),
  'contact.txt': 'Email: hello@rathik.dev\nGithub: @mdrathik',
}

const DIRECTORIES = ['blog', 'snippets', 'projects', 'about', 'tags']

const DEMO_COMMANDS = ['cat intro.txt', 'whoami', 'ls', 'help']

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

export function Terminal() {
  const router = useRouter()
  const [history, setHistory] = useState<Array<{ command: string; output: React.ReactNode }>>([])
  const [input, setInput] = useState('')
  const [isDemoMode, setIsDemoMode] = useState(true)
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>('classic')
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
            <div key={key} className="grid grid-cols-[100px_1fr] gap-4">
              <span className="text-primary-400">{key}</span>
              <span>{desc}</span>
            </div>
          ))}
          <p className="mt-2 text-gray-400">Try running: 'cat intro.txt' or 'theme dracula'</p>
        </div>
      )
    } else if (trimmedCmd.startsWith('theme')) {
      const args = trimmedCmd.split(' ')
      if (args.length === 1) {
        output = `Current theme: ${currentTheme}. Available themes: ${Object.keys(THEMES).join(', ')}`
      } else {
        const newTheme = args[1] as ThemeKey
        if (THEMES[newTheme]) {
          setCurrentTheme(newTheme)
          output = `Theme switched to ${newTheme}`
        } else {
          output = `Theme '${newTheme}' not found. Available: ${Object.keys(THEMES).join(', ')}`
        }
      }
    } else if (trimmedCmd === 'clear') {
      setHistory([])
      return
    } else if (trimmedCmd === 'ls') {
      output = (
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
        </div>
      )
    } else if (trimmedCmd === 'about') {
      output = (
        <div className="space-y-1">
          <p>Name: Md Solaiman Hossain (Rathik)</p>
          <p>Role: CTO at CODECONY</p>
          <p>Location: Dhaka, Bangladesh 🇧🇩</p>
        </div>
      )
    } else if (trimmedCmd === 'whoami') {
      output = 'guest@rathik.dev'
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
      output = '☕ Brewing some virtual java...'
    } else if (trimmedCmd === 'love') {
      output = '❤️ Made with love by Rathik'
    } else {
      output = `Command not found: ${trimmedCmd}. Type 'help' for available commands.`
    }

    setHistory((prev) => [...prev, { command: cmd, output }])
  }

  const stopDemo = () => {
    if (!isDemoRef.current) return
    isDemoRef.current = false
    setIsDemoMode(false)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
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
      await new Promise((resolve) => {
        timeoutRef.current = setTimeout(resolve, 5000)
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
      className={`mt-2 overflow-hidden rounded-lg border border-gray-800 shadow-2xl dark:border-gray-700 md:mt-8 ${theme.bg}`}
      onClick={handleTerminalClick}
    >
      <div className={`border-b border-gray-800 px-4 py-2 ${theme.headerBg}`}>
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className={`h-3 w-3 rounded-full ${theme.dots[0]}`}></div>
            <div className={`h-3 w-3 rounded-full ${theme.dots[1]}`}></div>
            <div className={`h-3 w-3 rounded-full ${theme.dots[2]}`}></div>
          </div>
          <div className="flex-1 text-center text-sm font-medium text-gray-400">
            A passionate{' '}
            <span className="line-through decoration-red-500 decoration-2">Software Dev</span>{' '}
            <span className="animate-wave-pulse bg-gradient-to-r from-emerald-500 via-blue-500 via-purple-500 to-pink-500 bg-[length:400%_auto] bg-clip-text font-bold text-transparent">
              Viber Coder
            </span>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className={`scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700 h-[60vh] overflow-y-auto p-4 font-mono text-xs md:h-[550px] md:text-sm ${theme.text}`}
      >
        <div className={`mb-4 ${theme.muted}`}>
          Welcome to RT's Terminal v1.0.0
          <br />
          Type 'help' to see available commands.
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

      <div className={`border-t border-gray-800 px-4 py-2 ${theme.headerBg}`}>
        <SpotifyNowPlaying className={`text-xs ${theme.muted}`} />
      </div>
    </div>
  )
}
