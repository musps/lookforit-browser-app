import React, { Component } from 'react'
import './styles.css'
import CharterAgentContent from './charter-agent.html'

const SupportPageTpl = ({title, content}) => (
  <div class='supportPageCustom'>
    <div class='sp-title'>
      <h1>
        {title}
      </h1>
    </div>

    <div class='sp-content' dangerouslySetInnerHTML={{__html: content}} />
  </div>
)


const CharterAgent = () => (
  <SupportPageTpl
    title='La charte des livreurs'
    content={CharterAgentContent}
  />
)

export default CharterAgent
