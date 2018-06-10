import React, { Component } from 'react';
import HeaderClient, {
  NoProductInCat
} from '@appCl/Components/HeaderClient'

const HeaderContainer = class HeaderContainer extends Component {
  state = {
    isOpen: false
  }

  constructor (props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    this.setState(prevState => ({
      isOpen: prevState.isOpen ? false : true
    }))
  }

  render () {
    return (
      <HeaderClient 
        isOpen={this.state.isOpen}
        content={<NoProductInCat />}
        onClick={this.onClick}
      />
    )
  }
}

export default HeaderContainer
