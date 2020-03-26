import { GET_FLIGHT_DETAILS } from "./HomeActions"

const ACTION_HANDLERS = {
  [GET_FLIGHT_DETAILS]: (state, action) => ({
    ...state,
    flightDetails: action.payload
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}

export default function HomeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
