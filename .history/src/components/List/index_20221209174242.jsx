import React, { Component } from 'react'


export default class List extends Component {
  render() {
    const {users,isFirst,isLoading,err} = this.props
    return (
      <div className="row">
        {
          isFirst ? <h2>welcome</h2> :
          isLoading ? <h2>loading</h2> :
          err ? <h2 style={{color:'red'}}>{err}</h2> :
          <div className="card">
            <a rel='noreferrer' href={users.} target="_blank">
              <img alt='head_portrait' src={users.} style={{width: '100px'}}/>
            </a>
            <p className="card-text">reactjs</p>
          </div>
        }
      </div>
    )
  }
}

