import React, { Component } from 'react'

export default class Count extends Component {
    /* selectNumber = () => {
         
    }; */
    state = {count:0}
    increment = () => {
        
    };
    decrement = () => {
        
    };
    incrementIfOdd = () => {
        
    };
    incrementAsync = () => {
        
    };

    render() {
    return (
        <div>
            <h1>sum:</h1>
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
