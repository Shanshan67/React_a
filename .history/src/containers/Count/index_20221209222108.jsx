import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment,decrement,incrementAsync } from '../../redux/actions/count'

class Count extends Component {
  render() {
    return (
      
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

