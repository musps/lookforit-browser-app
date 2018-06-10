import React from 'react'

export const SearchResultHeader = ({label, count}) => (
  <div className='searchCriteria'>
    <h1 className='label'>« {label} »</h1>
    <span className='count'>{count} Résultat(s)</span>
  </div>
)

export const ResultListItem = ({label, description, price}) => (
  <div className='resultItem'>
    <img className='img' />

    <div className='desc'>
      <label className='firstTitle'>{label}</label>
      <label className='subTitle'>{description}</label>
    </div>

    <div className='descMore'>
      <div className='price'>
        <label className='priceStartAt'>à partir de</label>
        <label className='priceAmount'>{price}</label>
      </div>
      <div className='btnIconShop'></div>
    </div>
  </div>
)

export const ResultCategories = ({children}) => (
  <ul className='resultCategories'>
    {children}
  </ul>
)

export const ItemCat = ({label}) => (
  <li className='itemCat'>
    <div className='iconCat'></div>
    <label>{label}</label>
  </li>
)
