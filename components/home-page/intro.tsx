import { Twemoji } from '~/components/ui/twemoji'
import { GoogleAds } from '~/components/adsense/ads'

export function Intro() {
  return (
    <h1 className="text-neutral-900 dark:text-neutral-200">
      I'm <span className="font-medium">Md Solaiman Hossain</span> - a passionate Software Developer
      in
      <GoogleAds client="ca-pub-9583661339866748" slot="4551714058" />
      <span className="hidden font-medium">Dhaka</span>
      <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji="flag-bangladesh" />
      </span>
    </h1>
  )
}
