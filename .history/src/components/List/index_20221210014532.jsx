import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const {users,isFirst, isLoading,err} = this.props
    return (
      <div>
        {
            isFirst ? <h2>welcome</h2> :
            isLoading ? <h2>loading...</h2> :
            err ? <h2 style={{color:'red'}}>{err}</h2> :
            users.map((u) => {
                return (
                    <div>
                        <a rel="noreferrer" href={u.html_url} target='_blank'>
                            <img alt='head_portait' src={u.avatar_url} />
                        </a>
                    </div>
                )
            })
        }
      </div>
    )
  }
}
