import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import HomeReducer from './../views/home/HomeReducer'
import ProfileReducer from './../views/profile/ProfileReducer'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    home: HomeReducer,
    profile: ProfileReducer
  })
export default createRootReducer
