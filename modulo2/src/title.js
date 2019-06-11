'use strict'

import React from 'react'

const Title = (props) => (
    <h1>Olá {`${props.name} ${props.lastName} - ${props.age} Anos!`}</h1>
)

Title.defaultProps = {
    name: 'Desconhecido',
    lastName: 'Sem Sobrenome'
}

// const Title = React.createClass({
//     getDefaultProps: function () {
//         return {
//             name: 'Desconhecido',
//             lastName: 'Sem Sobrenome'
//         }
//     },
//     render: function () {
//         return (
//             <h1>Olá {this.props.name} {this.props.lastName} - {this.props.age - 2 } Anos</h1>
//         )
//     }
// })

export default Title