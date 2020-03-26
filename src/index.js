import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.scss"

import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import configureStore, { history } from "./reducers/createStore"

const store = configureStore(/* provide initial state if any */)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)
