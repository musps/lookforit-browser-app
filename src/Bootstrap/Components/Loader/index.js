import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withApp } from '@bt/Wrappers/AppWrapper'
import styles from './styles'

export const loaderShow = function () {
  this.setState(prevState => ({
    data: {
      ...prevState.data,
      loader: true
    }
  }))
  // ==> Fake loading.
  setTimeout(() => {
    this.state.actions.loaderHide()
  }, 2000)
}

export const loaderHide = function () {
  this.setState(prevState => ({
    data: {
      ...prevState.data,
      loader: false
    }
  }))
}

export const _Loader = ({loader, message}) => (
  <styles.main loader={loader}>
    <styles.content>
      <styles.message>
        {message}
      </styles.message>
    </styles.content>
  </styles.main>
)

const Loader = props => <_Loader
  loader={props.data.loader}
  message='loader'
/>

export default withApp(Loader)
