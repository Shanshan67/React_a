import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const {persons,isFirst,isLoading,err} =this.props
    return (
      <div>
        {
            isFirst ? <h2>welcome</h2> :
            isLoading ? <h2>loading...</h2> :
            err ? <h2>{err}</h2> :
            persons.map((p) => {
                return (
                    <div>
                        <a href={p.} ></a>
                    </div>
                )
            })
        }
      </div>
    )
  }
}
