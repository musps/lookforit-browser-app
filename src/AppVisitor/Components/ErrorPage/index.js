import React, { Component } from 'react'
import './styles.css'

export default ({code, codeMessage, description}) => (
  <div className="error">
    <h1 className="code">
      {code}
    </h1>
    <h2 className="codeMessage">
      {codeMessage}
    </h2>
    <p className="description">
      {description}
    </p>
  </div>
)
