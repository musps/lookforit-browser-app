import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const InfoPanel = ({children}) => (
  <div className="infoPanel">
    {children}
  </div>
)

export const SubPanelTitle = ({title}) => (
  <div className="panel panelWithTitle">
    <h1>{title}</h1>
  </div>
)

export const SubPanelCaption = ({children}) => (
  <div className="panel panelWithCaption">
    {children}
  </div>
)

export const SubPanelCaptionItem = ({label, icon}) => {
  const iconStyle = {
    backgroundImage: 'url(' + icon + ')'
  }

  return (
    <div className="caption">
      <div className="icon" style={iconStyle}></div>
      <label className="label">
        {label}
      </label>
    </div>
  )
}

export const SubPanelLink = ({location, label}) => (
  <div className="panel panelWithBtn">
    <Link to={location}>{label}</Link>
  </div>
)

export const SubPanel = ({children, title, linkLabel, linkLocation}) => (
  <div className="subPanel">
    {title !== null &&
      <SubPanelTitle title={title} />
    }
    <SubPanelCaption>
      {children}
    </SubPanelCaption>
    <SubPanelLink location={linkLocation} label={linkLabel} />
  </div>
)

export default InfoPanel
