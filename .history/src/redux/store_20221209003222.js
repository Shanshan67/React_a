import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import count from './reducers/count'
import person from './reducers/person'


const allReducer = combineReducers({
    count,
    persons
})

export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))