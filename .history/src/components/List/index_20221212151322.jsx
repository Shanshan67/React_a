import React, { Component } from 'react'

export default class List extends Component {
    
  render() {
    const {persons,isFirst,isLoading,err} = this.props
    return (
      <div>
        {
            isFirst ? <h2>welcome</h2> :
            isLoading ? <h2>loading...</h2> :
            err ? <h2>{err} </h2> :
            persons.map((p) => {
                return (
                    <div key={p.id}>
                        <a rel="noreferrer" href={p.html_url} target='_blank' >
                            <img src={p.avatar_url} alt="head_portrait" />
                        </a>
                        <p>{p.login} </p>
                    </div>
                )
            })
        }
      </div>
    )
  }
}
