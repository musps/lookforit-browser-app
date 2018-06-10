import React, { Component } from 'react'
import './styles.css'
import PrevQuestionItem from './QuestionItem'

export const QuestionItem = PrevQuestionItem

export const QuestionList = ({children}) => (
 <div className='questionList'>
  {children}
 </div>
)

export const QuestionCategory = ({title}) => (
  <div className='questionCategory'>
    <h1><span>{title}</span></h1>
  </div>
)

const SupportPage = ({title, children}) => (
  <div className='supportPage'>
    <div className='pageTitle'>
      <div className='icon-faq-question'></div>
      <h1>{title}</h1>
    </div>
    {children}
  </div>
)

export default SupportPage
