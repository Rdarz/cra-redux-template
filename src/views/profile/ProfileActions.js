export const GET_USER_PROFILE = 'GET_USER_PROFILE'

// -------------------Auth Loading Actions--------------------

export const getUserProfileSuccess = (payload) => {
  return {
    type: GET_USER_PROFILE,
    payload
  }
}
