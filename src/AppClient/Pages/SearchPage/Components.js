import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import SearchBar, {
  ItemList,
  ItemListTitle,
  ItemDivider,
  ItemBigTitle,
  Item
} from '@appCl/Components/SearchBar'

export const SearchResult = ({criteria}) => {
  const showFullResult = `Voir tous les résultats pour « ${criteria} »`

  return (
    <div className='searchBarResult'>
      <ItemList>
        <Item label='Label' description='Description' />
      </ItemList>

      <ItemList>
        <ItemListTitle title='Articles' />
        <Item label='Label' description='Description' />
        <Item label='Label' description='Description' />
      </ItemList>

      <ItemList>
        <ItemListTitle title='Magasins' />
        <Item label='Label' description='Description' />
        <Item label='Label' description='Description' />
      </ItemList>

      <ItemList>
        <Link to='/app/search'>
          <ItemBigTitle title={showFullResult} />
        </Link>
      </ItemList>
    </div>
  )
}

export const SearchPageComponent = ({value, onChange, searchResult}) => (
  <div className='searchPage'>
    <div className='searchBarContent'>
      <SearchBar
        value={value}
        onChange={onChange}
        placeHolder='Cherchez ce que vous voulez...'
      />
    </div>
    {searchResult}
  </div>
)

export const NoResult = ({criteria, location}) => (
  <div className='searchBarNoResult'>
    <div className='content'>
      <h1>Pas de résultat pour « {criteria} »</h1>
      <h2>Oups !</h2>
      <label>Pas de soucis !</label>
    </div>

    <div className='footer'>
      <div className='footerContent'>
        <a href={location} className='btnCreateCMD'>Personnaliser votre commande</a>
      </div>
    </div>
  </div>
)