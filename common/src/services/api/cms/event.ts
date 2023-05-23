import { useQuery } from 'react-query'

import { cmsClient } from '../http-client'
import { Event, EventTheme } from './data-types'

export const useEventTheme = (subdomain: string) => {
  return useQuery<EventTheme>({
    queryKey: ['event-theme', subdomain],
    queryFn: async () =>
      ((await cmsClient?.get(`?subdomain=${subdomain}`))?.data as Event)?.theme
  })
}
