import React, { Component } from 'react'
import {
  ProfilCustomerPage,
  BoxTitle,
  BoxData,
  BoxHeader,
  BoxContent,
  ItemInput,
  ItemDivider,
  BoxFooter,
  BoxModeEco,
  BoxAddr,
  BtnInfoAgent
} from './Components'
import BtnLinkYellow from '@appCl/Components/BtnLinkYellow'

const ProfilCustomer = ({data, onChange, onClickEdit}) => (
  <ProfilCustomerPage>
    <BoxTitle title='Mes informations' />
    <BoxData>
      <BoxHeader title='James Bond' />
      <BoxContent>
        <ItemInput 
          name='email'
          onChange={onChange}
          label='Email'
          type='text'
          value={data.email.value}
          onClickEdit={onClickEdit}
          isEdit={data.email.isEdit} />
        <ItemDivider />
        <ItemInput
          name='phone'
          label='Téléphone'
          type='text'
          value={data.phone.value}
          onClickEdit={onClickEdit}
          isEdit={data.phone.isEdit} />
        <ItemDivider />
        <ItemInput
          name='password'
          label='Mot de passe'
          type='password'
          value={data.password.value}
          onClickEdit={onClickEdit}
          isEdit={data.password.isEdit} />
        <ItemDivider />
      </BoxContent>

      <BoxFooter>
        <BoxAddr>
        </BoxAddr>
      </BoxFooter>
    </BoxData>

    <BoxModeEco />

    <BtnLinkYellow text='Voir mes informations Agent' location='/app/profil/agent' />

  </ProfilCustomerPage>
)

const ProfilCustomerContainer = class ProfilCustomerContainer extends Component {
  state = {
    data: {
      email: {
        value: 'azerty',
        isEdit: true
      },
      phone: {
        value: 'azert',
        isEdit: false
      },
      password: {
        value: 'azerty',
        isEdit: false
      },
      ecoMode: {
        checked: false
      }
    }
  }

  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onClickEdit = this.onClickEdit.bind(this)
  }

  onChange (e) {
    const name = e.target.name
    const value = e.target.value

    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [name]: {
          ...prevState.data[name],
          value: value
        }
      }
    }))
  }

  onClickEdit (e) {
    const name = e.target.name
    const value = e.target.value

    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [name]: {
          ...prevState.data[name],
          isEdit: prevState.data[name].isEdit ? false : true
        }
      }
    }))
  }

  render () {
    return (
      <ProfilCustomer 
        data={this.state.data} 
        onChange={this.onChange} 
        onClickEdit={this.onClickEdit} />
    )
  }
}

export default ProfilCustomerContainer
