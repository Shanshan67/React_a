import React, { Component } from 'react'

export default class Search extends Component {
    search = () => {
        const {value} = this.keyWord
        this.props.addSearch({})
    }
  render() {
    return (
      <div>
        <input ref={this.keyWord} type="text" placeholder='search name' />
        <button onClick={this.search} >search</button>
      </div>
    )
  }
}
