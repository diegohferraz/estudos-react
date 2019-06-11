'use strict'

import React from 'react'
import Title from './title'

class App  extends React.Component{
    render () {
        return (
            <div>
                <Title name = 'Diego' age={28}/>
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