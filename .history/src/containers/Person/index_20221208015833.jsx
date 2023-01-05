import React, { Component } from 'react'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'

class Person extends Component {
    addPerson = () => {
        const name =this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
    };

    render() {
    return (
        <div>
            <h2>person Component</h2>
            <input ref={c=>this.nameNode=c} type='text' placeholder='name' />
            <input ref={c=>this.ageNode=c} type='text' placeholder='age' />
            <button onClick={this.addPerson}>add</button>
            <ul>
                {
                    this.props.yiduiren.map(()=>{
                        
                    })
                }
            </ul>
        </div>
    )
    }
}

export default connect(
    state=>({yiduiren:state.rens}),
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction
    }
)(Person)
