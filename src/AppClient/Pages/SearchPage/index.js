import React, { Component } from 'react'
import {
  SearchPageComponent,
  SearchResult,
  NoResult
} from './Components'
import './styles.css'

const SearchPage = class searchPage extends Component {
  state = {
    value: '',
  }

  constructor (props) {
    super(props)

    this.onValueChange = this.onValueChange.bind(this)
  }

  onValueChange (e) {
    this.setState({
      value: e.target.value
    })
  }

  searchResult () {
    /**
      * Fake content loader
      */
    const siz = this.state.value.length

    if (siz > 0 && siz <= 3) {
      return (
        <SearchResult criteria={this.state.value} />
      )
    } else if (siz > 3) {
      return (
        <NoResult criteria={this.state.value} />
      )
    }
  }

  render () {
    return (
      <SearchPageComponent
        value={this.state.value}
        onChange={this.onValueChange}
        searchResult={this.searchResult()}
      />
    )
  }
}

export default SearchPage
