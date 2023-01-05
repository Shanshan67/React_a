import React, { Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {
    increment = () => {
        const {value} = this.selectNumber
        
    }
    decrement = () => {
        const {value} = this.selectNumber
        
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        
        if(store.getState()%2!==0){
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNumber
        
        setTimeout(() => {
            
        },500)
    }

    render() {
    return (
        <div>
            <h1>sum:{store.getState()} </h1>
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
