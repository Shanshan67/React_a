import React, { Component } from 'react'
import { withRouter } from './withRouter'

class Search extends Component {
    constructor(){
        super()
        this.search=this.search.bind(this)
    }
    search = async() => {
        const {value}=this.keyWord
        this.props.unpdateState({isFirst:false,isLoading:true})
        try{
            const response = await fetch(`https://api.github.com/search/users?q=${value}`)
            const data= await response.json()
            this.props.unpdateState({isLoading:false,persons:data.items})
        }catch(error){
            this.props.unpdateState({isLoading:false,err:error.message})
        }
        this.props.navigate('/list')
        this.keyWord.value=''
    }
  render() {
    return (
      <div>
        <input type="text" placeholder='search your need' ref={c=>this.keyWord=c}/>
        <button onClick={this.search}>search</button>
      </div>
    )
  }
}
export default withRouter(Search)