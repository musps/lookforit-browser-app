import React, { Component, Fragment} from 'react'
import classNames from 'classnames'
import './styles.css'

const BtnFacture = ({bc, label, icon}) => {
  const cls = classNames({
    btnFacture: true,
    [bc]: true
  })

  return (
    <button className={cls}>
      <div className={`icon ${icon}`}></div>
      <label className='label'>{label}</label>
    </button>
  )
}

const HTContent = ({title, shop, date, price, onClickSelected}) => (
  <Fragment>
    <h1 onClick={onClickSelected}>{title}</h1>
    <div className='shop'>
      <div className='icon'></div>
      <label className='label'>{shop}</label>
    </div>
    <div className='tt'>
      <div className='date'>
        {date}
      </div>
      <div className='price'>
        {price}
      </div>
    </div>
    <div>
      <BtnFacture bc='white' icon='icon-replay' label='Repasser cette commande' />
    </div>
  </Fragment>
)

export const HistoryItem = ({title, shop, date, price, isSelected, onClickSelected}) => {
  const cls = classNames({
    historyItem: true,
    isSelected: isSelected
  })

  return (
    <div className={cls}>
      <div className='itemCategory'>
        <div className='icon'></div>
      </div>

      <div className='itemContent'>
        <HTContent
          onClickSelected={onClickSelected}
          title={title}
          shop={shop}
          date={date}
          price={price}
        />
      </div>

      <div className='itemImage'>
        <div className='image'></div>
      </div>
    </div>
  )
}

export const HistoryList = ({children}) => (
  <div className='historyList'>
    {children}
  </div>
)

export const SearchBar = ({criteria, onChange}) => (
  <div className='hp-c-searchBar'>
    <input
      className='searchBarInput'
      type='text'
      placeholder='Recherche rapide'
      value={criteria}
      onChange={onChange}
      />
    <div className='icon icon-calendar'></div>
  </div>
)
