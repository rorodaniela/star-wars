import {combineReducers, createStore} from 'redux'
import collectionsReducer from './reducers/collectionReducer'
import actorsReducer from './reducers/actorsReducers'

const rootReducers = combineReducers({
    collectionsReducer,
    actorsReducer
})

const store = createStore(rootReducers)

export default store