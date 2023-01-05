import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const {users,isFirst, isLoading,err} = this.props
    return (
      <div>
        
        <div>
            <a href='' target='_blank'>
                <img src=''/>
            </a>
        </div>
      </div>
    )
  }
}
