import React, { Component } from 'react'

export default class Search extends Component {
    search = ()=>{
        console.log(this.keyWordElement.value)
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
