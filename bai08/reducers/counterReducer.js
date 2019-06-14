import { 
    ACTION_DECREASE,
    ACTION_INCREASE
 } from '../actions/actionTypes'

const counterReducer = (state=0, action) => {    
    let {type, n} = action    
    switch(type) {
        case ACTION_INCREASE:
          return state + n          
        case ACTION_DECREASE:
            return state - n          
        default:
          return state
      }
}
export default counterReducer