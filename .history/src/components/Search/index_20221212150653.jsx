import React, { Component } from 'react'

export default class Search extends Component {
    search = async() => {
        const {value} = this.keyWord
        this.props.updateState({isFirst:false,isLoading:true})
        try{
            const response= await fetch(`https://api.github.com/search/users?q=${value}`)
            const data=await response.json()
            this.props.updateState({isLoading:false,persons:data.items})
        }catch(error){
            this.props.updateState({isLoading:false,err:error.message})
        }
    }
  render() {
    return (
      <div>
        <input ref={c=>this.keyWord=c} type="text" placeholder='find user'/>
        <button onClick={this.search}>search</button>
      </div>
    )
  }
}
