import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Home } from './assembly'
import './styles.less'

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="index-box">
          <div className="router">
            <Switch>
              <Route path="/home" component={Home} />
              <Redirect to="/home" />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
