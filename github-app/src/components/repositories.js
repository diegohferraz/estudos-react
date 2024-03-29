'use strict'

import React from 'react'

const Repositories = ({ className, title, repos }) => (
  <div className={className}>
    <h2>{title}</h2>
    <ul>
      { repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>
  </div>
)

Repositories.defaultProps = {
  className: ''
}

Repositories.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired
}

export default Repositories
