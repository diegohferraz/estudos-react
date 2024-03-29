'use strict'

import React from 'react'
import Title from './title'
import Square from './square'
import Button from './button'
import LikeButton from './like-button'
import Timer from './timer'
import Form from './form'

class App  extends React.Component{

    constructor () {
        super()
        
        this.state = {
            text: 'Teste State',
            color: 'cyan',
            showTimer: true,
            time: 1
        }
    }

    render () {
        return (
            <div>
                <Form />
                <hr />
                <Square color = {this.state.color} />
                {['red', 'green', 'blue'].map((color) => (
                    <Button 
                            key={color} 
                            handleClick = { () => this.setState({ color }) }>
                        {color.toUpperCase()}
                    </Button>
                ))}
                <hr/>

                {this.state.showTimer && <Timer time={this.state.time} />}
                <Button handleClick = { () => this.setState({showTimer: !this.state.showTimer}) }>
                    Show/Hide Timmer
                </Button>
                <Button handleClick = { () => this.setState({ time: 0 }) }>
                    reset Timmer
                </Button>

                <hr/>
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