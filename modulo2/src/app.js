'use strict'

import React from 'react'
import Title from './title'

const App = React.createClass({
    render: function () {
        return (
            <div>
                <Title name = 'Diego' age={28}/>
            </div>
        )
    }
})

export default App