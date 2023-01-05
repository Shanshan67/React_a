import React, { Component } from 'react'

export default class Count extends Component {
    selectNumber = () => {
         
    };
  render() {
    return (
      <div>
        <h1>sum:</h1>
        <select ref={c=>this.selectNumber=c}></select>
      </div>
    )
  }
}
