import { applyMiddleware, compose, createStore } from "redux"
import thunk from "redux-thunk"
import { createBrowserHistory } from "history"

import { routerMiddleware } from "connected-react-router"

import createRootReducer from "./index"

import { loadState, saveState } from "./middleware/localStorageLoad"
export const history = createBrowserHistory()

export default function configureStore(preloadedState = {}) {
  preloadedState = loadState()

  let composeEnhancers = compose

  if (process.env.NODE_ENV === "development") {
    // enable dev tools for dev evt
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === "function") {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        thunk,
        routerMiddleware(history) // for dispatching history actions
        // ... other middlewares ...
      )
    )
  )

  store.subscribe(() => {
    saveState(store.getState())
  })

  return store
}
