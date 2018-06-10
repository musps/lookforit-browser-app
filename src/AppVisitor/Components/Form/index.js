import React, { Component, Fragment } from 'react'
import classNames from 'classnames'
import './styles.css'

/**
  * FORM GROUP.
  */
const Form = ({children}) => (
  <div className='formCol'>
    {children}
  </div>
)

const FormGroupError = ({isError, errorMsg}) => (
  <Fragment>
    {typeof isError !== 'undefined' && isError &&
      <span className='inputErrorInfo'>
        {errorMsg}
      </span>
    }
  </Fragment>
)

const FormGroupLabel = ({label, isRequired}) => (
  <Fragment>
    {typeof label !== 'undefined' &&
      <label>
        {label}
        {isRequired &&
          <i className='inputRequired'>*</i>
        }
      </label>
    }
  </Fragment>
)

export const FormGroupInput = ({type, placeholder, value}) => (
  <input
    className='inputForm'
    type={type}
    placeholder={placeholder}
    value={value}
  />
)

export const FormGroupButton = ({label}) => (
  <button className='buttonForm'>{label}</button>
)

export const FormGroup = ({subLabelComponent, component, label, isRequired, isError, errorMsg}) => {
  const formGroupClms = classNames({
    formGroup: true,
    isError: isError
  })

  return (
    <div className={formGroupClms}>
      <FormGroupLabel label={label} isRequired={isRequired} />
      {subLabelComponent}
      {component}
      <FormGroupError isError={isError} errorMsg={errorMsg} />
    </div>
  )
}

const SubLabelPassword = ({isShown, onClick}) => (
  <label className='subLabelFrm' onClick={onClick}>
    {isShown ? 'Cacher le mot de passe.' : 'Afficher le mot de passe.'}
  </label>
)

export const FormGroupPassword = class FormGroupPassword extends Component {
  state = {
    isShown: false
  }

  constructor (props) {
    super(props)
    this.switchIsShwon = this.switchIsShwon.bind(this)
  }

  switchIsShwon () {
    this.setState(prevState => ({
      isShown: prevState.isShown ? false : true
    }))
  }

  render () {
    const inputType = this.state.isShown ? 'text' : 'password'

    return (
      <FormGroup
        component={<FormGroupInput type={inputType} value={this.props.value} />}
        subLabelComponent={<SubLabelPassword isShown={this.state.isShown} onClick={this.switchIsShwon} />}
        label={this.props.label}
        isRequired={true}
        isError={this.props.isError}
        errorMsg={this.props.errorMsg} />
    )
  }
}

export default Form