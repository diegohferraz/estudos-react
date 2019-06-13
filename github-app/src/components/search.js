'use strict'

import React, { PropTypes } from 'react'

const Search = ({ handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='digite o nome do usuario'
      onKeyUp={handleSearch} />
  </div>
)

Search.PropTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search
