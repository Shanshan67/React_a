import React, { Component } from 'react'

export default class Home extends Component {
    render() {
    return (
        <div>
            <h3>我是Home的内容</h3>
            <div>
            <ul className="nav nav-tabs">
            <li>
                <a className="list-group-item" href="./home-news.html">News</a>
            </li>
            <li>
                <a className="list-group-item active" href="./home-message.html">Message</a>
            </li>
            </ul>
            
            </div>
        </div>
    )
    }
}
