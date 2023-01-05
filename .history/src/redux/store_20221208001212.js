import {createStore} from 'redux'
import countReducer from './count_reducer'
import from 'redux-thunk'

export default createStore(countReducer)