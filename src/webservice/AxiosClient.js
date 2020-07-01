import axios from 'axios'
import { api } from 'common/utils/apiConfig'

export const axiosInstance = axios.create({
  baseURL: api.baseURL + api.restApiRoot
})

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  function (err) {
    return Promise.reject(err)
  }
)

export async function post(
  apiName: string,
  params: any,
  onSuccess: Function,
  onFailure?: Function,
  onError?: Function
) {
  let res = []
  return await axiosInstance
    .post(apiName, params)
    .then((response) => {
      if (response.status === 200) {
        const { data } = response
        if (data) {
          onSuccess(data, response)
        } else if (onFailure) {
          onFailure(response)
        } else {
          console.log('Something went wrong')
        }
      } else {
        if (onError) {
          onError(response.status)
        } else {
          console.log('Something went wrong')
        }
      }
      res = response
      return response
    })
    .catch((e) => {
      if (onError) {
        onError(e)
      } else {
        // goToErrorScreen(e.message)
      }
    })
}

export async function get(
  apiName: string,
  onSuccess: Function,
  onFailure?: Function,
  onError?: Function
) {
  let res = []
  return await axiosInstance
    .get(apiName)
    .then((response) => {
      console.log('INSIDE GET API', response)
      if (response.status === 200) {
        const { data, statusText } = response

        if (data) {
          onSuccess(data, response)
        } else if (onFailure) {
          onFailure(response)
        } else {
          console.log('Something went wrong')
        }
      } else {
        if (onError) {
          onError(response.status)
        } else {
          console.log('Something went wrong')
        }
      }
      res = response
      return response
    })
    .catch((e) => {
      console.log('INSIDE GET', e, e.message)
      if (onError) {
        onError(e)
      } else {
        // goToErrorScreen(e.message)
      }
    })
}
