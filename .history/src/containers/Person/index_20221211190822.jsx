import React, { Component } from 'react'
import { connect } from 'react-redux'
import {} from '../../redux/actions/count'

class Count extends Component {
  render() {
    return (
      <div>Count</div>
    )
  }
}
export default connect(
    state=>({count:state.count,personCount:state.person.length}),
    {increment,decrement,incrementAsync}
)(Count)