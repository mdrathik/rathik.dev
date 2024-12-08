// global.d.ts
export {}

declare global {
  interface Window {
    adsbygoogle: any[] // You can change 'any' to a more specific type if nesseded
  }
}
