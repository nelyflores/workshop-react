import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
    postReducer,
    specialityReducer,
    coursetReducer,
    teacherReducer,
    fragmentReducer
} from './reducers'

export default createStore(combineReducers({
    postReducer,
    specialityReducer,
    coursetReducer,
    teacherReducer,
    fragmentReducer
}), composeWithDevTools(applyMiddleware(thunk)))
