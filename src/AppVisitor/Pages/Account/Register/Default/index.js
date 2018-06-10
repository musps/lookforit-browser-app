import React, { Component } from 'react'
import BigPanel, { SplitPanel, LinkPanel } from './../../../../Components/BigPanel'

const AccountLinks = () => (
  <BigPanel>
    <SplitPanel>
      <LinkPanel title='Je veux livrer !'
        location='/site/account/register/delivery_man' />
    </SplitPanel>
    <SplitPanel>
      <LinkPanel title='Je veux acheter !'
        location='/site/account/register/buyer' />
    </SplitPanel>
  </BigPanel>
)

const HomePage = () => (
  <div className="registerDefaultPage">
    <AccountLinks />
  </div>
)

export default HomePage
