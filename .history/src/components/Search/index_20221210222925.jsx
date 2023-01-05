import React, { Component } from 'react'

export default class Search extends Component {
    search = async() => {
        const {value} = this.keyWord
        this.props.addSearch({isFirst:false,isLoading:true})
        try{
            const response=await fetch(``)
            const data=await
        }catch(errror){

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
