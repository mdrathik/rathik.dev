export function FooterReveal() {
  return (
    <div className="h-[32vh] [clip-path:inset(0)] md:h-[42vh]">
      <div className="fixed bottom-0 left-0 flex h-[32vh] w-full items-center justify-center md:h-[42vh]">
        <span className="select-none whitespace-nowrap text-[13vw] font-extrabold leading-none tracking-tighter">
          <span className="text-transparent [-webkit-text-stroke:2px_#9ca3af] dark:[-webkit-text-stroke:2px_#4b5563]">
            RATHIK
          </span>
          <span className="inline-block bg-gradient-to-r from-rose-600 via-red-500 to-orange-500 bg-clip-text pr-[0.08em] text-transparent dark:from-rose-400 dark:via-red-400 dark:to-orange-400">
            .dev
          </span>
        </span>
      </div>
    </div>
  )
}
