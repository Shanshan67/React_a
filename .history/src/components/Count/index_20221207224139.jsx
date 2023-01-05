import React, { Component } from 'react'

export default class Count extends Component {
    render() {
    return (
        <div>
            <h1>sum:0</h1>
            <select ref={c=>this.selectNumber=c}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button>+</button>
            <button>-</button>
            <button>奇数加</button>
            <button>异步加</button>
        </div>
    )
    }
}
