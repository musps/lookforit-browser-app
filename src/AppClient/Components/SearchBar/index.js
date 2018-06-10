import React, { Component, Fragment } from 'react'
import './styles.css'

/**
  * SEARCH BAR
  */

const SearchBar = ({value, onChange, placeHolder}) => (
  <div className='searchBar'>
    <input
      className='searchBarInput'
      type='text'
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
    />
    <button className='searchBarBtn'>
      <div className='tinyRound'></div>
      <div className='bigRound'>
        <label>GO</label>
      </div>
    </button>
  </div>
)

/**
  * SEARCH BAR CONTENT RESULT.
  */

export const ItemList = ({children}) => (
  <div className='sbItemList'>
    {children}
  </div>
)

export const ItemListTitle = ({title}) => (
  <Fragment>
    <ItemDivider />
    <h1 className='sbItemTitle'>
      {title}
    </h1>
  </Fragment>
)

export const ItemDivider = () => (
  <div className='sbItemDivider' />
)

export const ItemBigTitle = ({title}) => (
  <Fragment>
    <ItemDivider />
    <h1 className='sbItemBigTitle'>
      {title}
    </h1>
  </Fragment>
)

export const Item = ({label, description}) => (
  <div className='sbItem'>
    <div className='sbItemInfo'>
      <h1 className='sbItemInfoTitle'>{label}</h1>
      <h2 className='sbItemInfoDesc'>{description}</h2>
    </div>
    <div className='sbItemIcon'></div>
  </div>
)

export default SearchBar

