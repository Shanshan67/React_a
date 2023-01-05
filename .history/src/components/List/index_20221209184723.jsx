import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <div class="row">
        <div class="card">
          <a href="https://github.com/reactjs" target="_blank">
            <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
          </a>
          <p class="card-text">reactjs</p>
        </div>
      </div>
    )
  }
}

