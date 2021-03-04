import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import collectionsReducer from './reducers/collectionReducer'
import actorsReducer from './reducers/actorsReducers'

const rootReducers = combineReducers({
    collectionsReducer,
    actorsReducer
})

const middlewareEnhancer = applyMiddleware(thunk)

const store = createStore(rootReducers, middlewareEnhancer)

export default store