import React, { Component } from 'react'
import { connect } from 'react-redux'

class Count extends Component {
  render() {
    return (
    <div>
        <select>
            <option value="1">1</option>
            <option value="2">2</option>
        </select>&sbnp;
        
    </div>
    )
  }
}
export default connect(
    state=>({count:state.count,personCount:state.person.length})
)(Count)