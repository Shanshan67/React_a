import {createStore} from 'redux'
import countReducer from './count_reducer'
import thunk from 'redux-thunk'

export default createStore(countReducer)