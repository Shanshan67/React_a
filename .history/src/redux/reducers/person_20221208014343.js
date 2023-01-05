import {ADD_PERSON} from '../constant'

const initState = [{id:'001',name:'tom',age:18}]
export default function personReducer(preState,action){
    const {type,data}=action
    switch (type){
        case INCREMENT:
            return preState+data
        case DECREMENT:
            return preState-data
        default:
            return preState
    }
}