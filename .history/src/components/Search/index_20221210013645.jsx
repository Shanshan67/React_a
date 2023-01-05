import React, { Component } from 'react'

export default class Search extends Component {
  search = async() => {
    const {value} = this.keyWord
    this.props.findUsers({isFirst:false, isLoading:true})
    try{
      const response = await fetch(``)

    }catch(error){

    }
  }
  render() {
    return (
      <div>
        <h2>search github</h2>
        <div>
          <input ref={c=>this.keyWord=c} type="text" placeholder='the name please' />
          <button onClick={this.search}>search</button>
        </div>
      </div>
    )
  }
}
