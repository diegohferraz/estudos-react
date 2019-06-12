'use strict'

import React, { Component } from 'react'

class Form extends Component {
    constructor () {
        super()
        
        this.state = {
            time: 0,
            name: 'Diego',
            checked: false,
            showContent: false
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
                <br/>
                <input 
                        type="text" 
                        name="name" 
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })} />
                <br/>
                <label>
                    <input 
                        type="checkbox"
                        checked={this.state.checked}
                        onChange={
                            () => { 
                                this.setState({ 
                                    checked: !this.state.checked 
                                }, () => {
                                    this.setState({ showContent: this.state.checked })
                                }) 
                            }
                        }/>
                        Mostrar conteudo
                </label>
                <br/>
                { this.state.showContent && <div>Conteudo</div> }

                <button type="submit" >SUBMIT</button>
            </form>
        )
    }
}

export default Form