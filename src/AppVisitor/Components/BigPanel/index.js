import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const BigPanel = ({children}) => (
  <div className="bigPanel">
    {children}
  </div>
)

export const SplitPanel = ({children}) => (
  <div className="panel splitPanel">
    {children}
  </div>
)

export const LinkPanel = ({title, location}) => (
  <Link to={location} className="panelBtn">
    <span>{title}</span>
  </Link>
)

export default BigPanel
