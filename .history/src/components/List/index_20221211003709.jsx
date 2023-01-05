import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const { users,isFirst,isLoading,err}=this.props
    return (
      <div>
        {
            isFirst ? <h2>welcome</h2> :
            isLoading ? <h2>loading...</h2> :
            err ? <h2>{err} </h2> :
            users.map((u) => {
                 return (
                    <li key={u.id}>
                        
                        <p>{u.login} </p>
                    </li>
                 )
            })
        }
      </div>
    )
  }
}
