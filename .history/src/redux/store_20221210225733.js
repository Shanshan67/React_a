import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import count from '../redux/reducers/count'
import person from '../redux/reducers/person'

const allReducers = combineReducers({count,person})
export default createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))