import React, { Component } from 'react'
import './styles.css'

const BtnToggle = ({checked, onClick}) => (
  <label className="switch">
    <input type="checkbox" checked={checked} onClick={onClick} />
    <span className="slider"></span>
  </label>
)

export default BtnToggle


