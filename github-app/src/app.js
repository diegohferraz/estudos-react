'use strict'

import React from 'react'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <div className='search'>
          <input
            type='search'
            placeholder='digite o nome do usuario' />
        </div>
        <div className='user-info'>
          <img src='https://avatars0.githubusercontent.com/u/3427663?v=4' />
          <h1>
            <a href='https://github.com/diegohferraz'>Diego Ferraz</a>
          </h1>

          <ul className='repos-info'>
            <li>- Repositorios: 122</li>
            <li>- Seguidores: 10</li>
            <li>- Seguindo: 122</li>
          </ul>

          <div className='actions'>
            <button>Ver repositórios</button>
            <button>Ver favoritos</button>
          </div>

          <div className='repos'>
            <h2>Repositorios</h2>
            <ul>
              <li>
                <a href='#'>Nome do Repositorio</a>
              </li>
            </ul>
          </div>

          <div className='starred'>
            <h2>Favoritos</h2>
            <ul>
              <li>
                <a href='#'>Nome do Repositorio</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    )
  }
}

export default App
