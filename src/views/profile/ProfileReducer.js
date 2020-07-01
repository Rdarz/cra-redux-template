import { GET_USER_PROFILE } from './ProfileActions'

const ACTION_HANDLERS = {
  [GET_USER_PROFILE]: (state, action) => ({
    ...state,
    userProfile: action.payload
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}

export default function ProfileReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
