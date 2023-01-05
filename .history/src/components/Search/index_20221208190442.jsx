import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    search = () => {
        const {value:keyword} = this.keyWordElement
        this.props.updateAppState({})
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
            response => {
                this.props.saveUsers(response.data.items)
            },
            error => {
                
            }
        )
    }
  render() {
    return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
            <input ref={c=>this.keyWordElement=c} type="text" placeholder="enter the name you search"/>&nbsp;
            <button onClick={this.search}>Search</button>
            </div>
        </section>
    )
  }
}
