import axios from 'axios'
import config from '../../config'

export const cmsClient = config.api.cmsURL
  ? axios.create({ baseURL: config.api.cmsURL })
  : undefined

export const beApiClient = config.api.beApiURL
  ? axios.create({ baseURL: config.api.beApiURL })
  : undefined
