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
                    <div key={u.id}>
                        <a href={u.html_url}>
                            <img src={u.} alt="" />
                        </a>
                        <p>{u.login} </p>
                    </div>
                 )
            })
        }
      </div>
    )
  }
}
