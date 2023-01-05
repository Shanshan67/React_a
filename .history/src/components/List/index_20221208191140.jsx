import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const {}
    return (
      <div className="row">
        {
          this.props.users.map((user) => {
            return (
              <div key={user.id} className="card">
                <a rel='noreferrer' href={user.html_url} target="_blank">
                  <img alt='head_portrait' src={user.avatar_url} style={{width: '100px'}}/>
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
