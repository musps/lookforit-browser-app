import React, { Component } from 'react'
import classNames from 'classnames'
import './styles.css'
import { Link } from 'react-router-dom'
const NavBarContent = ({children, openMobile}) => {
  const cls = classNames({
    navBar: true,
    openMobile: openMobile
  })

  return (
    <div className={cls}>
      {children}
    </div>
  )
}

export const DesktopMenu = ({children}) => (
  <ul className="itemList">
    {children}
  </ul>
)

export const DesktopLink = ({label, hideMobile, location}) => {
  const cls = classNames({
    item: true,
    hideMobile: hideMobile
  })

  return (
    <li className={cls}>
      <Link to={location}>{label}</Link>
    </li>
  )
}

export const MobileMenuContent = ({children}) => (
  <div className="mobileContent">
    {children}
  </div>
)

export const MobileItemList = ({children}) => (
  <ul className="itemList">
    {children}
  </ul>
)

export const MobileItem = ({label, location}) => (
  <li className="item">
    <Link to={location}>{label}</Link>
  </li>
)

const HamburgerAction = ({onClick}) => {
  return (
    <li className='item' onClick={onClick}>
      Menu <i className="fas fa-bars paddingIcon"></i>
    </li>
  )
}

const NavBar = ({desktopMenu, mobileMenu, openMobile, onClickOpenMobile}) => {
  return (
    <NavBarContent openMobile={openMobile}>
      <MobileMenuContent>
        <MobileItemList>
          {mobileMenu}
        </MobileItemList>
      </MobileMenuContent>
      <DesktopMenu>
        {desktopMenu}
        <HamburgerAction onClick={onClickOpenMobile} />
      </DesktopMenu>
    </NavBarContent>
  )
}

export default NavBar
