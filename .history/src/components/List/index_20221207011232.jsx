import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    return (
        <div className="row">
            {
                this.props.users.map((userObj)=>{
                    return (
                        <div className="card">
                            <a rel="noreferrer" href="https://github.com/reactjs" target="_blank">
                            <img alt="head_portrait" src={userObj.avatar_url} style={{width: '100px'}}/>
                            </a>
                            <p class="card-text">{userObj.login}</p>
                        </div>
                    )
                })
            }
        </div>
    )
  }
}
