import React, { Component } from 'react'

export default class Search extends Component {
  search = async() => {
    const {value} = this.keyWord
    this.props.findUsers({isFirst:false, isLoading:true})
    try{
      const response = await fetch(`https://api.github.com/search/users?q=${value}`)
      const data = response.json()
      this.props.findUsers({isLoading:false,users:data.items})
      console.log('yibudd',data.items)
    }catch(error){
      this.props.findUsers({isLoading:false,err:error.message})
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
