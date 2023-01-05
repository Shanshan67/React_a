import React, { Component } from 'react'

export default class Search extends Component {
    search = async() => {
        const {value} =this.keyWord
        this.props.ddUsers({isFirst:false,isLoading:true})
        try{
            const response = await fetch(`https://api.github.com/search/users?q=${value}`)
            const data =await response.json()
            this.props.ddUsers({iisLoading:false,users:data.items})
        }catch(error){
            this.props.ddUsers({iisLoading:false,err:error.message})
        }
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
