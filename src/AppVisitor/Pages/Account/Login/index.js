import React, { Component } from 'react'
import './styles.css'
import Form, {
  FormGroup,
  FormGroupInput,
  FormGroupPassword,
  FormGroupButton,
} from './../../../Components/Form'

const LoginForm = () => (
  <Form>
    <FormGroup
      component={<FormGroupInput type='text' value='azerty' />}
      label='Adresse email'
      isRequired={true}
      isError={true}
      errorMsg='error' />
    <FormGroupPassword
      value='azerty'
      label='Mot de passe'
      isError={false}
      errorMsg='error' />
    <FormGroup
      component={<FormGroupButton label='Connexion' />} />
  </Form>
)

const Login = () => (
  <div className="accountLoginPage pageContent900">
    <h1 className="pageName">Connexion</h1>
    <LoginForm />
  </div>
)

export default Login
