import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment,decrement,incrementAsync } from '../../redux/actions/count'

class Count extends Component {
  increment
  render() {
    return (
      <div>
        <h1>sum:{this.props.count},total:{this.props.personCount} </h1>
        <select>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>ODD</button>&nbsp;
        <button onClick={this.incrementAsync}>ASYNC</button>&nbsp;
      </div>
    )
  }
}

export default connect(
  state=>({
    count:state.count,
    personCount:state.person.length}),
    {
      increment,decrement,incrementAsync
    }
)(Count)

