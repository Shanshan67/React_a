import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    search = (e) => {
        const {value:keyword} = this.keyWordElement
        axios.get().then{
            re
        }
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
