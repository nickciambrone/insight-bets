import React from 'react';
import { connect } from 'react-redux'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'
import  CustomButton  from '../custom-button/custom-button.component'
import {selectCartItems} from '../../redux/cart/cart.selectors.js'
import { withRouter } from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions.js'
const CartDropdown = ({items, history, dispatch})=>(
    <div className = 'cart-dropdown'>
        {items.length >0? (<div className = 'cart-items' >
        {items.map(item=><CartItem item={item}></CartItem>)}
        </div>) : (<span className= 'empty-message'>Your cart is empty</span>)}
        <CustomButton onClick={
            ()=>
            {history.push('/checkout');
            dispatch(toggleCartHidden())
            }} > Go To Checkout</CustomButton>
    </div>
)

const mapStateToProps = (state)=>({
    items : selectCartItems(state)
})


export default withRouter(connect(mapStateToProps)(CartDropdown));