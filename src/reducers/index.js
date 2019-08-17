import {combineReducers} from 'redux'
import list from './list'
import details from './details'
import user from './user'

let Reducers = combineReducers({
    list,
    details,
    user
})

export default Reducers