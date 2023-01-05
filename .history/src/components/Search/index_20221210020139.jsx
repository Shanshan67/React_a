import React, { Component } from 'react'

export default class Search extends Component {
  search = async() => {
    const {value} = this.keyWord
    this.props.findUsers({isFirst:false, isLoading:true})
    try{
      const response = await fetch(`https://api.github.com/search/users?q=${value}`)
      const data = response.json()
      this.props.findUsers({isLoading:false,users:data.items})
    }catch(error){
      this.props.findUsers({isLoading:false,err:error.message})
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
