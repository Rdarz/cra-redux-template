import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import HomeReducer from "./../views/home/HomeReducer"

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    home: HomeReducer
  })
export default createRootReducer
