import React, { Component } from 'react'
import { connect } from 'react-redux'

class Count extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}
export default connect(
    state=>({count:state.count,personCount:state.person.length})
)(Count)