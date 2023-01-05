import React, { Component } from 'react'

export default class Search extends Component {
    search = async() => {
        const {value} = this.keyWord
        this.props.updateState({isFirst:false,isLoading:true})
        try{
            const response= await fetch(``)
        }catch(error){

        }
    }
  render() {
    return (
      <div>Search</div>
    )
  }
}
