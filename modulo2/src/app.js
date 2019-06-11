'use strict'

import React from 'react'
import Title from './title'
import Square from './square'

class App  extends React.Component{
    render () {
        return (
            <div>
                <Title name = 'Diego' age={28}/>
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