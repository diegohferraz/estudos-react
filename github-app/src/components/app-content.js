'use strict'

import React from 'react'

import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repositories'

const AppContent = ({
  userInfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  getRepos,
  getStarred
}) => (
  <div className='app'>

    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Carregando...</div>}
    {!!userInfo && <UserInfo userInfo={userInfo} />}
    {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}
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
  starred: React.PropTypes.array.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  handleSearch: React.PropTypes.func.isRequired,
  getRepos: React.PropTypes.func.isRequired,
  getStarred: React.PropTypes.func.isRequired
}

export default AppContent
