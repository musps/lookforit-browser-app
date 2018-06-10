import React, { Component } from 'react'
import Form, {
  FormGroup,
  FormGroupInput,
  FormGroupPassword,
  FormGroupButton,
} from './../../../../Components/Form'

const RegisterLogin = () => (
  <Form>
    <FormGroup
      component={<FormGroupInput type='text' value='azerty' />}
      label='Nom'
      isRequired={true}
      isError={false}
      errorMsg='error' />
    <FormGroup
      component={<FormGroupInput type='text' value='azerty' />}
      label='Prénom'
      isRequired={true}
      isError={false}
      errorMsg='error' />
    <FormGroup
      component={<FormGroupInput type='text' value='azerty' />}
      label='Adresse email'
      isRequired={true}
      isError={false}
      errorMsg='error' />
    <FormGroupPassword
      value='azerty'
      label='Mot de passe'
      isError={false}
      errorMsg='error' />
    <FormGroup
      component={<FormGroupButton label='Valider' />} />
  </Form>
)

const Register = () => (
  <div className="accountRegisterPage pageContent900">
    <h1 className="pageName">Devenir acheteur !</h1>
    <RegisterLogin />
  </div>
)

export default Register
