import React, { Component } from 'react'

export default class Search extends Component {
    search = async() => {
        const {value} =this.keyWord
        this.props.ddUsers({})
    }
  render() {
    return (
      <div>
        <input ref={c=>this.keyWord=c} type="text" placeholder='name'/>
        <button onClick={this.search}>search</button>
      </div>
    )
  }
}
