import React, { Component } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import './styles.css'
import BtnToggle from '@appCl/Components/BtnToggle'
import BtnLinkYellow from '@appCl/Components/BtnLinkYellow'

export const ProfilCustomerPage = ({children}) => (
  <div className='profilCustomerPage'>
    {children}
  </div>
)

export const BoxTitle = ({title}) => (
  <div className='box-title'>
    <h1 className='title'>
      {title}
    </h1>
  </div>
)

export const BoxData = ({children}) => (
  <div className='box-data'>
    {children}
  </div>
)

export const BoxHeader = ({title}) => (
  <div className='box-header'>
    <ProfilPicture />
    <h1 className='title'>
      {title}
    </h1>
  </div>
)

export const BoxContent = ({children}) => (
  <div className='box-content'>
    {children}
  </div>
)

export const BoxFooter = ({children}) => (
  <div className='box-footer'>
    {children}
  </div>
)

export const ItemDivider = () => (
  <div className='box-item-divider'></div>
)

export const ItemInput = ({label, name, type, value, isEdit, onChange, onClickEdit}) => {
  const clsBtInput = classNames({
    'bt-input': true,
    'bt-input-value': isEdit === false
  })

  return (
    <div className='box-item-input'>
      <label className='bt-label' for={label}>{label} : </label>
      <input className={clsBtInput} name={name} id={label} type={type} value={value} onChange={onChange} disabled={! isEdit} />
      <button name={name} className='bt-btn' onClick={onClickEdit}>{isEdit ? 'Enregistrer' : 'Modifier'}</button>
    </div>
  )
}

export const AddrBtn = ({name}) => (
  <button className='addr-btn'>
    {name}
  </button>
)

export const BoxAddr = () => (
  <div className='box-addr'>
    <div className='ba-title'>
      <label>
        Adresses :
      </label>
    </div>
    <div className='ba-content'>
      <AddrBtn name='Maison' />
      <AddrBtn name='Travail' />
      <AddrBtn name='Autre' />
    </div>
  </div>
)

export const ProfilPicture = () => (
  <div className='profilPicture'>
    <div className='editPicture'>
      Modifier
    </div>
  </div>
)


export const BtnInfoAgent = () => (
  <div className='divInfoAgent'>
    <Link to='' className='btnInfoAgent'>Voir mes informations Agent</Link>
  </div>
)

export const BoxModeEco = (checked, onClick) => (
  <div className='box-mode-eco'>
    <label className='title'>
      <div className='icon-mode-ecolo' />
      Mode écologie
    </label>
    <BtnToggle checked={checked} onClick={onClick} />
    <div className='bme-info'>
    <p>
      Je souhaite priviléger les courses non-polluantes.
    </p>
    </div>
  </div>
)

