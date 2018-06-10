import React, { Component } from 'react'
import classNames from 'classnames'
import './styles.css'

const BtnCheckBox = ({value, isChecked, onClick}) => {
  const cls = classNames({
    containerBtnCheckBox: true,
    isChecked: isChecked === true
  })

  return (
    <label className={cls} onClick={onClick}>
      <div className='value'>{value}</div>
      <span className="checkmark"></span>
    </label>
  )
}

export default BtnCheckBox
