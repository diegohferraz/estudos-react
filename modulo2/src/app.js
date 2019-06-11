'use strict'

import React from 'react'
import Title from './title'
import Square from './square'
import Button from './button'
import LikeButton from './like-button'

class App  extends React.Component{

    constructor () {
        super()
        
        this.state = {
            text: 'Teste State'
        }
    }

    render () {
        return (
            <div>
                <Title name = 'Diego' age={28}/>
                <h2 onClick = {() => ((
                    this.setState({text: 'Vc CLicou'})
                ))}>{this.state.text}</h2>
                <Button handleClick = { () => alert('Clique no botao normal') }>
                    TEXTO
                </Button>
                <LikeButton/>
                <br/><br/>
                {['blue', 'black', 'green'].map((square, index) => (
                    <div>
                        <Square key = {index} color = {square} />
                        <br/>
                    </div>
                ))}
                <Square />
            </div>
        )
    }
}

// const App = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 <Title name = 'Diego' age={28}/>
//             </div>
//         )
//     }
// })

export default App