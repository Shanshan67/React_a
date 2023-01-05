import React, { Component } from 'react'

export default class Search extends Component {
    search = async() => {
        const {value} = this.keyWord
        this.props.updateState({})
    }
  render() {
    return (
      <div>Search</div>
    )
  }
}
