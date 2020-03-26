export const GET_FLIGHT_DETAILS = "GET_FLIGHT_DETAILS"

// -------------------Auth Loading Actions--------------------

export const getFlightDetailsSuccess = payload => {
  return {
    type: GET_FLIGHT_DETAILS,
    payload
  }
}
