'use strict'

import React from 'react'

import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repositories'

const AppContent = ({ userInfo, repos, starred, handleSearch }) => (
  <div className='app'>

    <Search handleSearch={handleSearch} />
    {!!userInfo && <UserInfo userInfo={userInfo} />}
    {!!userInfo && <Actions />}
    {
      !!repos.length &&
      <Repos
        className='repos'
        title='Repositórios:'
        repos={repos} />
    }

    {
      !!starred.length &&
      <Repos
        className='repos'
        title='Repositórios:'
        repos={starred} />
    }

  </div>
)

AppContent.PropTypes = {
  userInfo: React.PropTypes.object.isRequired,
  repos: React.PropTypes.array.isRequired,
  starred: React.PropTypes.array.isRequired
}

export default AppContent
