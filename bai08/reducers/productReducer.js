import { 
    ACTION_INSERT_PRODUCT,
    ACTION_DELETE_PRODUCT
 } from '../actions/actionTypes'

const productReducer = (state=[], action) => {        
    switch(action.type) {
        case ACTION_INSERT_PRODUCT:
            return state.concat(action.newProduct)          
          case ACTION_DELETE_PRODUCT:
            return state.filter(product => product.id != action.id)          
        default:
          return state
      }
  }
  export default productReducer