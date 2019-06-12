'use strict'

import React, { Component } from 'react'

class Form extends Component {
    constructor () {
        super()
        
        this.state = {
            time: 0,
            name: 'Diego'
        }

        this.timmer;
    }

    
    render () {
        return(
            <form 
                onSubmit={ (e) => {
                    e.preventDefault();
                    console.log('event', e)
                }}
                
                onChange={ (e) => {
                    console.log('name', e.target.name)
                    console.log('value', e.target.value)
                }}>

                <input type="email" name="email" />
                <input 
                        type="text" 
                        name="name" 
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })} />

                <button type="submit" >SUBMIT</button>
            </form>
        )
    }
}

export default Form