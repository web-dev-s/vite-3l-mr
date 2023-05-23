export type EventMap = {
  id: string
}

export type EventChannel = {}

export type EventTheme = {
  mode: 'light' | 'dark'
  primaryColor: string
  secondaryColor: string
  warningColor: string
  dangerColor: string
  defaultSpace: number
  googleFontUrl: string
}

export type Event = {
  name: string
  title: string
  description: string
  startTime: Date | null
  endTime: Date | null
  map: Array<EventMap>
  mapImage: string | null
  thumbnail: string | null
  channels: Array<EventChannel>
  defaultChannel: EventChannel | null
  createdAt: Date
  theme: EventTheme
  subdomain: string
  id: string
}
