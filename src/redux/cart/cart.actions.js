import CartActionTypes from './cart.types'

export const toggleCartHidden = () =>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN,
})

//whatever we pass in as the parameter for the addItem action,
//gets sent to the cart reducer with that parameter as the payload
export const addItem = item =>({
    type:CartActionTypes.ADD_ITEM,
    payload: item
})
export const clearItem = item =>({
    type:CartActionTypes.CLEAR_ITEM,
    payload: item
})

export const removeItem = item =>({
    type:CartActionTypes.REMOVE_ITEM,
    payload: item
})


