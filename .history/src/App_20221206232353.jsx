import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div "container">
        <section "jumbotron">
          <h3 "jumbotron-heading">Search Github Users</h3>
          <div>
            <input type="text" placeholder="enter the name you search"/>&nbsp;<button>Search</button>
          </div>
        </section>
        <div "row">
          <div "card">
            <a href="https://github.com/reactjs" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
            </a>
            <p "card-text">reactjs</p>
          </div>
          <div "card">
            <a href="https://github.com/reactjs" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
            </a>
            <p "card-text">reactjs</p>
          </div>
          <div "card">
            <a href="https://github.com/reactjs" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
            </a>
            <p "card-text">reactjs</p>
          </div>
          <div "card">
            <a href="https://github.com/reactjs" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
            </a>
            <p "card-text">reactjs</p>
          </div>
          <div "card">
            <a href="https://github.com/reactjs" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
            </a>
            <p "card-text">reactjs</p>
          </div>
        </div>
      </div>
    )
  }
}
