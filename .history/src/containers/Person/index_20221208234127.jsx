import React, { Component } from 'react'
import { connect } from "react-redux"
import {} from '../../redux/actions/person'

class Person extends Component {
     = () => {
        
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

export default connect(
    state => ({:state}),
    {
        jia:createIncrementAction,
    }
)(Person)