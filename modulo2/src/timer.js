'use strict'

import React, { Component } from 'react'

class Timer extends Component {
    constructor () {
        super()
        
        this.state = {
            time: 0
        }

        this.timmer;
    }

    componentDidMount () {
        this.timmer = setInterval(() => this.setState({ time: this.state.time + 1}), 1000)
    }

    componentWillUnmount () {
        clearInterval(this.timmer)
    }

    render () {
        return(
            <div>Timer: {this.state.time}</div>
        )
    }
}

export default Timer