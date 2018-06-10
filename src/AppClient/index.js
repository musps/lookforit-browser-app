import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import './index.css'

/**
  * Components.
  */
import SideBar from './Containers/SideBar'

/**
  * Container
  */
import HeaderContainer from './Containers/Header'

/**
  * Pages.
  */
import { PageNotFound } from './Pages/ErrorPage'
import SearchPage from './Pages/SearchPage'
import SearchResultPage from './Pages/SearchResult'
import OrderTrackingPage from './Pages/OrderTracking'
import ProfilCustomerPage from './Pages/Profil/Customer'
import ProfilAgentPage from './Pages/Profil/Agent'
import HistoryCustomerPage from './Pages/History/Customer'
import HistoryAgentPage from './Pages/History/Agent'
import OrderCustomPage from './Pages/OrderCustom'
import SupportFaqPage from './Pages/Support/Faq'
import SupportCharterAgentPage from './Pages/Support/CharterAgent'
import SupportCharterCookiesPage from './Pages/Support/CharterCookies'

const TemplateView = ({children, currentPage}) => (
  <div className={`containerAppClient ${currentPage}`}>
    <SideBar />
    <div className="rightContent">
      <HeaderContainer />
      <div className='pageContent'>
        {children}
      </div>
    </div>
  </div>
)

const Router = () => (
  <Switch>
    <Route path="/app" exact component={SearchPage} />
    <Route path="/app/search" component={SearchResultPage} />
    <Route path="/app/order_tracking" component={OrderTrackingPage} />
    <Route path="/app/profil/customer" component={ProfilCustomerPage} />
    <Route path="/app/profil/agent" component={ProfilAgentPage} />
    <Route path="/app/history/customer" component={HistoryCustomerPage} />
    <Route path="/app/history/agent" component={HistoryAgentPage} />
    <Route path='/app/order_custom' component={OrderCustomPage} />
    <Route path='/app/support/faq' component={SupportFaqPage} />
    <Route path='/app/support/charter-agent' component={SupportCharterAgentPage} />
    <Route path='/app/support/charter-cookies' component={SupportCharterCookiesPage} />
    <Route component={PageNotFound} />
  </Switch>
)

const locationToClassName = (location) => {
  return location.split('/').join('-')
}
const AppClient = props => {

  return (
    <TemplateView currentPage={locationToClassName(props.location.pathname)}>
      <Router />
    </TemplateView>
  )
}

export default AppClient
