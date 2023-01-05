import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const {users,isFirst, isLoading,err} = this.props
    return (
      <div className="row">
        {
            /* isFirst ? <h2>welcome</h2> :
            isLoading ? <h2>loading...</h2> :
            err ? <h2 style={{color:'red'}}>{err}</h2> :
            users.map((u) => {
                return (
                <div key={u.id} className="card">
                    <a rel="noreferrer" href={u.html_url} target='_blank'>
                        <img alt='head_portait' src={u.avatar_url} style={{width: '100px'}}/>
                    </a>
                    <p className="card-text">{u.login}</p>
                </div>
                )
            }) */
            
        }
      </div>
    )
  }
}
