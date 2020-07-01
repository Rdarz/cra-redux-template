import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import routesList from './routes'

export default function App() {
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
