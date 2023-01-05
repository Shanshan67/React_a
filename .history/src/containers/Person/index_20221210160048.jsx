import { connect } from 'http2'
import React, { Component } from 'react'

class Person extends Component {
  render() {
    return (
      <div>Person</div>
    )
  }
}
export default connect(
  state=>({person:state.person,count:state.count}),
  {}
)(Person)
