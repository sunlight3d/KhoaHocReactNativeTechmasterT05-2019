import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import productReducer from './productReducer'

//alert(`counterR = ${counterReducer}`)
const rootReducer = combineReducers({
    counterReducer,
    productReducer
});
export default rootReducer