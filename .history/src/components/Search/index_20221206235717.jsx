import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    search = ()=>{
        const {keyWordElement:{value:keyword}} = this
        console.log(keyword)
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
            response =>{console.log('success',response.data)},
            error=>{console.log('bu')}
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                <input ref={c=>this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
                <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
