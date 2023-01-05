import React, { Component } from 'react'

export default class Count extends Component {
    /* selectNumber = () => {
         
    }; */
  render() {
    return (
      <div>
        <h1>sum:</h1>
        <select ref={c=>this.selectNumber=c}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button>+</button>
        <button>-</button>
        <button>odd</button>
        <button>async</button>
      </div>
    )
  }
}
