//import axios from 'axios';
import React, { Component } from 'react'
import {withRouter} from './withRouter.js'

class Search extends Component {
  constructor(){
    super()
    this.handlesearch=this.handlesearch.bind(this)
  }

  handlesearch = async() => {
    const {value} = this.keyWord
    this.props.finduser({isFirst:false,isLoading:true})
    
    try{
      const response = await fetch(`https://api.github.com/search/users?q=${value}`)
      const data = await response.json()
      this.props.finduser({isLoading:false,users:data.items})
    }catch(error){
      this.props.finduser({isLoading:false,err:error.message})
    }
    this.props.navigate("/list")//路由跳转
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c=>this.keyWord=c} type="text" placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.handlesearch}>Search</button>
        </div>
      </section>
    )
  }
}
export default withRouter(Search);
