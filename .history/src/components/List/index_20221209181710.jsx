import React, { Component } from 'react'
import {withRouter} from './withRouter.js'

class List extends Component {
  constructor(){
    super()
    this.list=this.list.bind(this);
    }

  list(){
  this.props.navigate('/')
  }

  render() {
    const {users,isFirst,isLoading,err} = this.props
    return (
      <div className="row">
        {
          isFirst ? <h2>welcome</h2> :
          isLoading ? <h2>loading</h2> :
          err ? <h2 style={{color:'red'}}>{err}</h2> :
          users.map((user) => {
             return (
              <div key={user.id} className="card">
                <a rel='noreferrer' href={user.html_url} target="_blank">
                  <img alt='head_portrait' src={user.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{user.login}</p>
              </div>
             )
          })
        }
      </div>
    )
  }
}
export default withRouter(List);
