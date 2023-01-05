import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const {users,isFirst,isLoading,err}=this.props
    return (
      <div className="row">
        {
          isFirst ? <h2>welcom</h2> :
          isLoading ? <h2>loading...</h2> :
          err ? <h2 style={{color:'red'}}>{err}</h2> :
          users.map((user) => {
            return (
              <div className="card">
                <a rel="noreferrer" href={user.html_url} target="_blank">
                  <img alt='head_portrait' src={user.} style={{width: '100px'}}/>
                </a>
                <p className="card-text">reactjs</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

