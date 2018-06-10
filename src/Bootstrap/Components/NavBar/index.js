import React, { Component } from 'react'
import styles, { ItemListMobileCSS } from './styles'

export const ItemList = ({children}) => (
  <styles.itemList>
    {children}
  </styles.itemList>
)

export const Item = ({label, hideMobile}) => (
  <styles.item hideMobile={hideMobile}>{label}</styles.item>
)

export const ItemMenu = ({onClick}) => (
  <styles.item onClick={onClick}>
    Menu <i className="fas fa-bars paddingIcon"></i>
  </styles.item>
)

export const ItemListMobileContainer = ({children, isOpen}) => (
  <ItemListMobileCSS.main isOpen={isOpen}>
    {children}
  </ItemListMobileCSS.main>
)

export const ItemListMobile = ({children}) => (
  <ItemListMobileCSS.list>
    {children}
  </ItemListMobileCSS.list>
)

export const ItemMobile = ({label}) => (
  <ItemListMobileCSS.item>
    {label}
  </ItemListMobileCSS.item>
)

const NavBar = ({children}) => (
  <styles.main>
    {children}
  </styles.main>
)

export default NavBar
