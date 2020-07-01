import { getUserProfileSuccess } from './ProfileActions'
import { get } from 'webservice/AxiosClient'
import api from 'common/constants/ApiConstants'

export const getUserProfile = (id) => {
  return async (dispatch, getState) => {
    return await get(
      `${api.fetchUserProfile}${id}`,
      (onSuccessData) => {
        dispatch(getUserProfileSuccess(onSuccessData))
        // setLoader(false)
      },
      (OnFailureData) => {
        // setLoader(false)
      },
      (error) => {
        console.log('INSIDE APP CONFIG', error)
        // setLoader(false)
        // dispatch(setErrorSuccess(error.msg))
      }
    )
  }
}
