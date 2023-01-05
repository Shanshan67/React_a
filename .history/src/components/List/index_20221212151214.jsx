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
                        <a href={p.html_url} target >
                            <img src={p.} alt="" />
                        </a>
                    </div>
                )
            })
        }
      </div>
    )
  }
}
