import React, { Component } from 'react'

export default class Search extends Component {
  search = async() => {
    const {value} = this.keyWord
    this.props.findSearch({isFirst:false,isLoading:true})
    try{
      const response = await fetch(``)
    }catch(error){
      this.props.findSearch({isLoading:false,err:error.message})
    }
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c=>this.keyWord=c} type="text" placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
