export function GlowBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-rose-300/40 blur-[130px] dark:bg-rose-700/20" />
      <div className="absolute -right-48 top-1/4 h-[30rem] w-[30rem] rounded-full bg-red-300/30 blur-[130px] dark:bg-red-800/15" />
      <div className="absolute -bottom-48 left-1/3 h-[32rem] w-[32rem] rounded-full bg-orange-200/40 blur-[140px] dark:bg-orange-900/15" />
    </div>
  )
}
