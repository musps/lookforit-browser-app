import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import './styles.css'

/**
  * Side Bar Components.
  */
const SideBarNavBar = ({switchMenuState}) => (
  <div className='navBarSideBar'>
    <BtnTrigger switchMenuState={switchMenuState} />
  </div>
)

const BtnTrigger = ({switchMenuState}) => (
  <div className='btnTrigger' onClick={switchMenuState}>
    MENU
  </div>
)

export const ItemList = ({children, full}) => {
  const cls = classNames({
    itemListSideBar: true,
    full: full
  })

  return (
  <ul className={cls}>
    {children}
  </ul>
  )
}

export const ItemListTitle = ({title}) => (
  <li className='title'>
    {title}
  </li>
)

export const ItemListItem = ({icon = '', label, location = '', pathName}) => {
  const isSelected = pathName === location
  const cls = classNames({
    label: true,
    itemLabelSelected: isSelected
  })

  const clsIcons = classNames({
    icon: true,
    [icon]: true,
    isSelected: isSelected
  })

  return (
    <li className='item'>
      <Link to={location}>
        <div className={clsIcons}></div>
        <div className={cls}>{label}</div>
      </Link>
    </li>
  )
}

export const ItemListDivider = () => (
  <li className='itemDivider'></li>
)

export const ItemUserInfoContent = ({fullName, addr, addrValue}) => (
  <div className='userInfo'>
    <div className='fullName'>{fullName}</div>
    <div className='addr'>{addr}</div>
    <div className='addrValue'>{addrValue}</div>
  </div>
)

export const ItemUserInfo = ({icon, fullName, addr, addrValue}) => (
  <ItemListItem icon={icon} label={<ItemUserInfoContent 
    fullName={fullName} 
    addr={addr} 
    addrValue={addrValue} />} />
)

/**
  * Side Bar Container.
  */
const SideBar = class SideBar extends Component {
  state = {
    isClose: false
  }

  constructor(props) {
    super(props)
    this.switchMenuState = this.switchMenuState.bind(this)
  }

  switchMenuState () {
    this.setState(prevState => ({
      isClose: prevState.isClose ? false : true
    }))
  }

  render () {
    const clsSideBar = classNames({
      sideBar: true,
      minify: this.state.isClose
    })

    return (
      <div className={clsSideBar}>
        <SideBarNavBar switchMenuState={this.switchMenuState} />

        <div className='content'>
          {this.props.children}
        </div>
      </div>
    )
  }

}

export default SideBar
