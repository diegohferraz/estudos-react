'use strict'

import React from 'react'

import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repositories'

class App extends React.Component {
  render () {
    return (
      <div className='app'>

        <Search />
        <UserInfo />
        <Actions />
        <Repos
          className='repos'
          title='Repositórios:'
          repos={[
            { link: '#', name: 'Repo 1' }
          ]} />
        <Repos
          className='starred'
          title='Favoritos:'
          repos={[
            { link: '#', name: 'Repo 2' }
          ]} />

      </div>
    )
  }
}

Repos.defaultProps = {
  className: ''
}

Repos.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired
}

export default App
