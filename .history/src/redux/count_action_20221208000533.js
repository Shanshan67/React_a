import store from './store'
import {INCREMENT,DECREMENT} from './constant'

export const createIncrementAction = data => ({type:INCREMENT,data})
export const createDecrementAction = data => ({type:DECREMENT,data})
export const createIncrementAsyncAction = (data,time) => {
    return () => {
        setTimeout(() => {
            store.dispatch(createIncrementAction(data)
        },time)
    }
}