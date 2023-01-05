import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div>
        <h2>search github</h2>
        <div>
          <input type="text" placeholder='the name please' />
          <button>search</button>
        </div>
      </div>
    )
  }
}
