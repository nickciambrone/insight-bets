
import CartActionTypes from './cart.types'
import {addItemToCart} from './cart.utils'
const INITIAL_STATE = {
    hidden:true,
    cartItems:[]
}

const cartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        //if the action type is ADD_ITEM
        case CartActionTypes.ADD_ITEM:
            // we are going to return a new state,
            return{
                // the state is going to = the same thing as before (...state)
                //with one change...
                ...state,
                    //the cartItems property is going to assume the value
                    //of the return value of the addItemToCart function with state.cartItems
                    //as the first parameter and the cartItem sent from collection-item as the second parameter 
                cartItems : addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}
export default cartReducer