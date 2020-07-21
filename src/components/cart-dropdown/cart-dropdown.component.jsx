import React from 'react';
import { connect } from 'react-redux'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'
import  CustomButton  from '../custom-button/custom-button.component'
import {selectCartItems} from '../../redux/cart/cart.selectors.js'

const CartDropdown = ({items})=>(
    <div className = 'cart-dropdown'>
        <div className = 'cart-items' >
        {items.map(item=><CartItem item={item}></CartItem>)}
        </div>
        <CustomButton > Go To Checkout</CustomButton>
    </div>
)

const mapStateToProps = (state)=>({
    items : selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);