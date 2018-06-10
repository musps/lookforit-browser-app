import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles, { 
  HandlerButtonCSS,
  ItemListCSS,
  ItemCSS,
  ItemUserInfoCSS
} from './styles'

export const HandlerButton = ({open, close, current, onClick}) => {
  const _current = current === true ? close : open;

  return (
    <HandlerButtonCSS.main>
      <HandlerButtonCSS.trigger onClick={onClick}>
        <i className={`fas ${current ? 'fa-times' : 'fa-bars'} closeMenuIcon`}></i>
      </HandlerButtonCSS.trigger>
    </HandlerButtonCSS.main>
  )
}

export const ItemList = ({children, flexGrow}) => (
  <ItemListCSS.main flexGrow={flexGrow}>
    {children}
  </ItemListCSS.main>
)

export const ItemTitle = ({title, hideTitle}) => (
  <ItemListCSS.title hideTitle={hideTitle}>
    {title}
  </ItemListCSS.title>
)

export const ItemDivider = () => (
  <ItemCSS.divider></ItemCSS.divider>
)

export const Item = ({icon, label, onlyIcon, srcIcon}) => (
  <ItemCSS.main>
    <ItemCSS.icon srcIcon={srcIcon}></ItemCSS.icon>
    <ItemCSS.label onlyIcon={onlyIcon}>{label}</ItemCSS.label>
  </ItemCSS.main>
)

export const ItemUserInfo = ({fullname, addr, addrValue, onlyIcon, srcIcon}) => (
  <ItemListCSS.main>
    <ItemCSS.main>
      <ItemCSS.icon srcIcon={srcIcon}></ItemCSS.icon>
      <ItemUserInfoCSS.main onlyIcon={onlyIcon}>
        <ItemUserInfoCSS.fullname>
          {fullname}
        </ItemUserInfoCSS.fullname>
        <ItemUserInfoCSS.addr>
          {addr}
        </ItemUserInfoCSS.addr>
        <ItemUserInfoCSS.addrValue>
          {addrValue}
        </ItemUserInfoCSS.addrValue>
      </ItemUserInfoCSS.main>
    </ItemCSS.main>
  </ItemListCSS.main>
)

const SideBar = class SideBar extends Component {
  state = {
    current: true
  }

  constructor(props) {
    super(props)
    this.state.current = props.current
    this.onClick = this.onClick.bind(this)
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      current: newProps.current
    })
  }

  onClick() {
    this.setState(prevState => ({
      current: prevState.current === true ? false : true
    }))
  }

  render() {
    const {current} = this.state

    return (
      <styles.main current={current}>
        <HandlerButton 
          open={this.props.open} 
          close={this.props.close} 
          current={current}
          onClick={this.props.onClick}
        />
        <styles.content>
          {this.props.children}
        </styles.content>
      </styles.main>
    )
  }
}

export default SideBar