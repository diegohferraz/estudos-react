'use strict'

import React from 'react'
import Button from './button'

const LikeButton = ({ children }) => (
    <Button handleClick = { () => alert('Clique no botao like') }>Curtir</Button>
)


export default LikeButton