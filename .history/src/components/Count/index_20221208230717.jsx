import React, { Component } from 'react'

export default class Count extends Component {
    increment = () => {
        const {value} = this.selectNumber
        this.props.jia(value*1)
        
    }
    decrement = () => {
        const {value} = this.selectNumber
       
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        
    }
    incrementAsync = () => {
        const {value} = this.selectNumber
        
    }

    render() {
    return (
        <div>
            <h1>sum:{this.props.count} </h1>
            <select ref={c=>this.selectNumber=c}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button onClick={this.increment} >+</button>&nbsp;
            <button onClick={this.decrement} >-</button>&nbsp;
            <button onClick={this.incrementIfOdd} >odd</button>&nbsp;
            <button onClick={this.incrementAsync} >async</button>&nbsp;
        </div>
    )
    }
}
