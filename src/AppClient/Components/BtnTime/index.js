import React, { Component, Fragment} from 'react';
import './styles.css'

const BtnTime = ({value}) => (
  <button className='btnTime'>
    <div className='icon icon-stopwatch'></div>
    <label>{value}</label>
  </button>
)

export default BtnTime

