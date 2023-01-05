import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <div className="row">
        {
          this.props.users.map((user) => {
            return (
              <div className="card">
                <a rel='noreferrer' href="https://github.com/reactjs" target="_blank">
                  <img alt='head_portrait' src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}}/>
                </a>
                <p className="card-text">{user.login} </p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
