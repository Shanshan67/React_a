import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment,decrement,incrementAsync } from '../../redux/actions/count'

class Count extends Component {
  render() {
    return (
      <div>
        <h1>sum:{this.props.count},total:{this.props.personCount} </h1>
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

