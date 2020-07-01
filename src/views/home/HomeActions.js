export const GET_USER_DETAILS = 'GET_USER_DETAILS'

// -------------------Auth Loading Actions--------------------

export const getUserDetailsSuccess = (payload) => {
  return {
    type: GET_USER_DETAILS,
    payload
  }
}
