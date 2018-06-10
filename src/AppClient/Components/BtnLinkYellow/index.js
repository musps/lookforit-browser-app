import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const BtnLinkYellow = ({text, location}) => (
  <div className='divBtnLinkYellow'>
    <Link to={location} className='btnLinkYellow'>
      {text}
    </Link>
  </div>
)

export default BtnLinkYellow

