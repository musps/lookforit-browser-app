import React, { Component } from 'react'
import { withApp } from '@bt/Wrappers/AppWrapper'
import { Link, Switch, Route } from 'react-router-dom'
import './index.css'

/**
  * Template Components.
  */
import NavBar from './Containers/NavBar'
import Footer from './Components/Footer'

/**
  * Pages.
  */
import HomePage from './Pages/Home'
import AccountLoginPage from './Pages/Account/Login'
import AccountRegisterDefault from './Pages/Account/Register/Default'
import AccountRegisterBuyerPage from './Pages/Account/Register/Buyer'
import AccountRegisterDeliveryManPage from './Pages/Account/Register/DeliveryMan'
import { PageNotFound } from './Pages/ErrorPage'

const TemplateView = ({children}) => (
  <div className="containerAppVisitor">
    <NavBar />
    <div className="content">
      {children}
    </div>
    <Footer />
  </div>
)

const Router = () => (
  <Switch>
    <Route path="/site" exact component={HomePage} />
    <Route path="/site/account/register" exact component={AccountRegisterDefault} />
    <Route path="/site/account/register/buyer" component={AccountRegisterBuyerPage} />
    <Route path="/site/account/register/delivery_man" component={AccountRegisterDeliveryManPage} />
    <Route path="/site/account/login" component={AccountLoginPage} />
    <Route component={PageNotFound} />
  </Switch>
)

const AppVisitor = class AppVisitor extends Component {

  constructor (props) {
    super(props)
  }

  componentDidUpdate (prevProps) {
    // ==> Close menu on mobile version.
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.actions.updateData('topMenu', false)
    }
  }

  render () {
    return (
      <TemplateView>
        <Router />
      </TemplateView>
    )
  }
}

export default withApp(AppVisitor)
