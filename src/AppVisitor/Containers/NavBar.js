import React, { Component, Fragment } from 'react'
import { withApp } from '@bt/Wrappers/AppWrapper'
import NavBar, {
  DesktopLink,
  MobileItem
} from './../Components/NavBar'

const MenuDesktop = () => (
  <Fragment>
    <DesktopLink label='Accueil' hideMobile
      location='/site' />
    <DesktopLink label='Comment ça marche ?' hideMobile
      location='/site/help' />
    <DesktopLink label='Connexion' hideMobile
      location='/site/account/login' />
    <DesktopLink label='Créer un compte' hideMobile
      location='/site/account/register' />
  </Fragment>
)

const MenuMobile = () => (
  <Fragment>
    <MobileItem label='Accueil'
      location='/site' />
    <MobileItem label='Comment ça marche ?'
      location='/site/help' />
    <MobileItem label='Connexion'
      location='/site/account/login' />
    <MobileItem label='Créer un compte'
      location='/site/account' />
  </Fragment>
)

const NavBarContainer = props => {
  const onClickOpenMobile = () => {
    props.actions.updateData('topMenu', props.data.topMenu === true ? false : true)
  }

  return (
    <NavBar
      desktopMenu={<MenuDesktop />}
      mobileMenu={<MenuMobile />}
      openMobile={props.data.topMenu}
      onClickOpenMobile={onClickOpenMobile} />
  )
}

export default withApp(NavBarContainer)
