import React, { Component } from 'react'

export default class Search extends Component {
    search = async() => {
        const {value}=this.keyWord
        this.props.unpdateState({isFirst:false,isLoading:true})
        try{
            const response = await fetch(``)
            const data= await response.json()
            this.props.unpdateState({isLoading:false,})
        }
    }
  render() {
    return (
      <div>Search</div>
    )
  }
}
