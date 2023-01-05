import React, { Component } from 'react'
import {NavLink,Route,Routes} from 'react-router-dom'
import News from './News'
import Message from './Message'

export default class Home extends Component {
    render() {
    return (
        <div>
            <h3>我是Home的内容</h3>
            <div>
            <ul className="nav nav-tabs">
            <li>
                <NavLink className="list-group-item" to="/news">News</NavLink>
            </li>
            <li>
                <a className="list-group-item" href="./home-message.html">Message</a>
                <NavLink className="list-group-item" to="/message">Message</NavLink>
            </li>
            </ul>
                <News/>
                <Message/>
            </div>
        </div>
    )
    }
}
