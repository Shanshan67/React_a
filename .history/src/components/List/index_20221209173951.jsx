import React, { Component } from 'react'


export default class List extends Component {
  render() {
    const {users,isFirst,isLoading,err} = this.props
    return (
      <div className="row">
        <div className="card">
          <a rel='noreferrer' href="https://github.com/reactjs" target="_blank">
            <img alt='head_portrait' src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}}/>
          </a>
          <p className="card-text">reactjs</p>
        </div>
      </div>
    )
  }
}

