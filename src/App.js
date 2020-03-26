import React, { Component } from "react"
import {
  Route,
  Switch,
  withRouter
  // Redirect
} from "react-router-dom"
import routesList from "./routes"

export class App extends Component {
  render() {
    return (
      <Switch>
        {routesList.map((route, index) => (
          <Route
            exact={route.exactPath || false}
            path={route.path}
            component={route.component}
            key={index}
          />
        ))}
      </Switch>
    )
  }
}
export default withRouter(App)
