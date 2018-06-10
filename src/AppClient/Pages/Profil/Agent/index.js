import React, { Component } from 'react'
import ProfilAgent from './Components'

const ProfilAgentPage = class ProfilAgentPage extends Component {
  state = {
    data: {
      charte: true,
      transport: {
        pieds: false,
        velo: false,
        moto: true,
        voiture: false,
        camion: false
      }
    }
  }

  constructor (props) {
    super(props)
    this.updateCharte = this.updateCharte.bind(this)
    this.updateTransportMode = this.updateTransportMode.bind(this)
  }

  updateCharte () {
    console.log('ok')

    this.setState(prevState => ({
      data: {
        ...prevState.data,
        charte: prevState.data.charte ? false : true
      }
    }))
  }

  updateTransportMode (e) {
    const id = e.target.dataset.id
    this.setState(prevState => ({
      data: {
        transport: {
          ...prevState.data.transport,
          [id]: prevState.data.transport[id] ? false : true
        }
      }
    }))
  }

  render () {
    return (
      <ProfilAgent 
        data={this.state.data}
        updateCharte={this.updateCharte} 
        updateTransportMode={this.updateTransportMode} />
    )
  }
}

export default ProfilAgentPage
