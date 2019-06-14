import {ACTION_INCREASE,ACTION_DECREASE,
    ACTION_INSERT_PRODUCT,
    ACTION_DELETE_PRODUCT,
 } from './actionTypes'
const increaseAction = (n) => ({type: ACTION_INCREASE,n})
const descreaseAction = (n) => ({type: ACTION_DECREASE,n})

//product
const insertProductAction = (newProduct) => ({
    type: ACTION_INSERT_PRODUCT,newProduct
})
const deleteProductAction = (id) => ({
    type: ACTION_DELETE_PRODUCT,id
})

export {
    increaseAction,
    descreaseAction,
    insertProductAction,
    deleteProductAction
}