import {createStore, applyMiddleware, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import count from './reducers/count'
import person from './reducers/person'

const allReducers = combineReducers({count,person})

export default createStore(allReducers,composeWithDevTools(applyMiddleWare(thunk)))