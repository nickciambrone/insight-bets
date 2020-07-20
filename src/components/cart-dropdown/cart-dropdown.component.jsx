import React from 'react';
import { connect } from 'react-redux'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'
import  CustomButton  from '../custom-button/custom-button.component'

const CartDropdown = ({items})=>(
    <div className = 'cart-dropdown'>
        <div className = 'cart-items' >
        {items.map(item=><CartItem item={item}></CartItem>)}
        </div>
        <CustomButton > Go To Checkout</CustomButton>
    </div>
)

const mapStateToProps = ({cart})=>({
    items : cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);