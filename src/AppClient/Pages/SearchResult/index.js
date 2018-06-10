import React from 'react'
import {
  SearchResultHeader,
  ResultListItem,
  ResultCategories,
  ItemCat
} from './Components'
import './styles.css'

const SearchResult = () => (
  <div className='searchResultPage'>
    <SearchResultHeader
      label='Parfum'
      count='16'
    />

    <ResultCategories>
      <ItemCat label='Cosmétique' />
      <ItemCat label='Alimentaire' />
      <ItemCat label='Catégorie' />
      <ItemCat label='Catégorie' />
    </ResultCategories>

    <div className='resultList'>
      <ResultListItem label='Label' description='description' price='66,50$' />
      <ResultListItem label='Label' description='description' price='66,50$' />
      <ResultListItem label='Label' description='description' price='66,50$' />
      <ResultListItem label='Label' description='description' price='66,50$' />
      <ResultListItem label='Label' description='description' price='66,50$' />
      <ResultListItem label='Label' description='description' price='66,50$' />
      <ResultListItem label='Label' description='description' price='66,50$' />
      <ResultListItem label='Label' description='description' price='66,50$' />
      <ResultListItem label='Label' description='description' price='66,50$' />
    </div>

    <div className='productNotOK'>
      <h1 className='titleNotOk'>Le produit n'est pas ici ?</h1>
      <div>
        <a className='btnCreateCMDMore'>Personnaliser votre commande</a>
      </div>
    </div>
  </div>
)

export default SearchResult