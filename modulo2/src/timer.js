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

    componentWillReceiveProps(nextProps) {
        // console.log('componentWillReceiveProps', this.props, nextProps);
        this.setState({ time: nextProps.time })
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log(this.state, nextState)
        return true
    }

    componentWillUpdate(nextProps, nextState) {
        // console.log('component will update')
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log('updated', prevState, this.state)
    }

    componentDidMount () {
        this.timmer = setInterval(() => this.setState({ time: this.state.time + 1 }), 1000)
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