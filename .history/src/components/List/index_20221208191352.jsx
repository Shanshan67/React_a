import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const {users,isFirst,isLoading,err} = this.props
    return (
      <div className="row">
        {
          isFirst ? <h2>welcome</h2> :
          isLoading ? <h2></h2>
        }
      </div>
    )
  }
}
