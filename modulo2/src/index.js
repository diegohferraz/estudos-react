'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Title from './app'

render(
    <AppContainer>
        <Title />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
)