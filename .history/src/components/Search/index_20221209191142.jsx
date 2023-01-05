import React, { Component } from 'react'
import {withRouter} from './withRouter'

class Search extends Component {
  constructor(){
    super()
    this.search=this.search.bind(this)
  }

  search = async() => {
    const {value} = this.keyWord
    this.props.findSearch({isFirst:false,isLoading:true})
    try{
      const response = await fetch(`https://api.github.com/search/users?q=${value}`)
      const data = await response.json()
      this.props.findSearch({isLoading:false,users:data.items})
    }catch(error){
      this.props.findSearch({isLoading:false,err:error.message})
    }
    this.props.navigate('/list')
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

export default withRouter(Search);