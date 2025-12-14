'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { SpotifyNowPlaying } from '~/components/ui/now-playing'

const COMMANDS = {
  help: 'Show available commands',
  whoami: 'Display current user',
  ls: 'List directory contents',
  cd: 'Change directory',
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

export function Terminal() {
  const router = useRouter()
  const [history, setHistory] = useState<Array<{ command: string; output: React.ReactNode }>>([])
  const [input, setInput] = useState('')
  const [isDemoMode, setIsDemoMode] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Ref to track demo mode status across async operations
  const isDemoRef = useRef(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

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
          <p className="mt-2 text-gray-400">Try running: 'cat intro.txt' or 'cd blog'</p>
        </div>
      )
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
        timeoutRef.current = setTimeout(resolve, 2000)
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
      className="mt-8 overflow-hidden rounded-lg border border-gray-800 bg-[#1e1e1e] shadow-2xl dark:border-gray-700"
      onClick={handleTerminalClick}
    >
      <div className="border-b border-gray-800 bg-[#2d2d2d] px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
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
        className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700 h-[550px] overflow-y-auto p-4 font-mono text-xs text-gray-300 md:text-sm"
      >
        <div className="mb-4 text-gray-500">
          Welcome to Rathik's interactive terminal v1.0.0
          <br />
          Type 'help' to see available commands.
        </div>
        {history.map((entry, i) => (
          <div key={i} className="mb-4 text-gray-300 antialiased">
            <div className="mb-1">
              <span className="text-green-400">guest@rathik.dev</span>:
              <span className="text-blue-400">~</span>$ {entry.command}
            </div>
            <div className="whitespace-pre-wrap">{entry.output}</div>
          </div>
        ))}

        <div className="flex items-center">
          <span className="text-green-400">guest@rathik.dev</span>:
          <span className="text-blue-400">~</span>$
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => {
              if (isDemoRef.current) stopDemo()
              setInput(e.target.value)
            }}
            onKeyDown={handleKeyDown}
            className="ml-2 flex-1 border-none bg-transparent p-0 text-gray-300 outline-none focus:ring-0"
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
        </div>
      </div>

      <div className="border-t border-gray-800 bg-[#2d2d2d] px-4 py-2">
        <SpotifyNowPlaying className="text-xs text-gray-400" />
      </div>
    </div>
  )
}
