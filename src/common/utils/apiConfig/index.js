
import apiConfigDev from './apiConfig.dev'
import apiConfigProd from './apiConfig.production'

export const api = process.env.NODE_ENV === 'production' ? apiConfigProd : apiConfigDev

export default {
  api
}
