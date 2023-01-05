import React, { Component } from 'react'

export default class Search extends Component {
    search = async() => {
        const {value} = this.keyWord
        this.props.addSearch({isFirst:false,isLoading:true})
        try{
            const response=await fetch(`https://api.github.com/search/users?q=${value}`)
            const data=await response.json()
            this.props.addSearch({isLoading:false,users:data.items})
        }catch(error){
            this.props.addSearch({isLoading:false,err:error.message})
        }
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
