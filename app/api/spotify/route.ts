import type { SpotifyNowPlayingData } from '~/types/data'

const LASTFM_RECENT_TRACKS_API = 'https://ws.audioscrobbler.com/2.0/'

let { LASTFM_API_KEY: api_key = '', LASTFM_USERNAME: username = 'mdrathik' } = process.env

export async function GET() {
  if (!api_key) {
    return Response.json({ isPlaying: false })
  }

  let url = new URL(LASTFM_RECENT_TRACKS_API)
  url.searchParams.set('method', 'user.getrecenttracks')
  url.searchParams.set('user', username)
  url.searchParams.set('api_key', api_key)
  url.searchParams.set('format', 'json')
  url.searchParams.set('limit', '1')

  let response = await fetch(url.toString(), { cache: 'no-store' })
  if (response.status > 400) {
    return Response.json({ isPlaying: false })
  }

  let data = await response.json()
  let track = data?.recenttracks?.track?.[0]
  let isPlaying = track?.['@attr']?.nowplaying === 'true'
  if (!track || !isPlaying) {
    return Response.json({ isPlaying: false })
  }

  let images: Array<{ size: string; '#text': string }> = track.image || []
  let albumImageUrl =
    images.find((img) => img.size === 'extralarge')?.['#text'] ||
    images.at(-1)?.['#text'] ||
    undefined
  // Last.fm serves a gray star placeholder when it has no real cover art
  if (albumImageUrl?.includes('2a96cbd8b46e442fc41c2b86b821562f')) {
    albumImageUrl = undefined
  }

  let songData: SpotifyNowPlayingData = {
    isPlaying: true,
    title: track.name,
    artist: track.artist?.['#text'],
    album: track.album?.['#text'],
    albumImageUrl,
    songUrl: track.url,
  }

  return Response.json(songData)
}
