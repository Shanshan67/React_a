import React, { Component } from 'react'

export default class List extends Component {
    
  render() {
    const {users,isFirst,isLoading,err}=this.props
    return (
      <div>
        <ul>
            {
              isFirst ? <h2>welcome</h2> :
              isLoading ? <h2>loading...</h2> :
              err ? <h2 style={{color:'red'}}>{err} </h2> :
              users.map((user) => {
                  return (<li key={user.id}>
                    
                  </li>)
              })
            }
        </ul>
      </div>
    )
  }
}
