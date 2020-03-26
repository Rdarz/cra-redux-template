import { getFlightDetailsSuccess } from "./HomeActions"
import { get } from "../../webservice/AxiosClient"
import api from "../../common/constants/ApiConstants"

export const getFlightDetails = (props = null) => {
  return async (dispatch, getState) => {
    return await get(
      api.fetchFlightDetails,
      onSuccessData => {
        dispatch(getFlightDetailsSuccess(onSuccessData))
        // setLoader(false)
      },
      OnFailureData => {
        // setLoader(false)
      },
      error => {
        console.log("INSIDE APP CONFIG", error)
        // setLoader(false)
        // dispatch(setErrorSuccess(error.msg))
      }
    )
  }
}
