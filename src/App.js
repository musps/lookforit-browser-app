import React, { Component } from 'react';
import { AppWrapper } from '@bt/Wrappers/AppWrapper'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Link, Switch, Route } from 'react-router-dom'

import globalData from './globalData'
import Loader, { loaderShow, loaderHide } from '@bt/Components/Loader'
import translate from '@bt/Providers/Translate'
import './App.css'

import AppVisitor from '@/AppVisitor'
import AppClient from '@/AppClient'

const actions = {
  loaderShow: loaderShow,
  loaderHide: loaderHide,
  translate: translate
}

const history = createBrowserHistory()

const AppDebug = () => (
  <div className="appDebug">
    <Link to="/site">appVisitor</Link>
    <hr />
    <Link to="/app">appClient</Link>
  </div>
)

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/site" component={AppVisitor}/>
      <Route path="/app" component={AppClient}/>
      <Route path="/" exact component={AppDebug}/>
    </Switch>
  </div>
)

export default () => (
  <AppWrapper data={globalData} actions={actions}>
    <Router history={history}>
      <App />
    </Router>
  </AppWrapper>
)
