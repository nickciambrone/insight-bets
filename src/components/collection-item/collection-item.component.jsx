import React from 'react';
import CustomButton from '../custom-button/custom-button.component'
import './collection-item.styles.scss';
import { connect } from 'react-redux'
import {addItem} from '../../redux/cart/cart.actions'

const CollectionItem = ({item, addItem})=>{
    const { imageUrl, name, price} = item
    return(
        <div className='collection-item'>
        <div className='image'
        style = {{
            backgroundImage:`url(${imageUrl})`,
           
        }} />
        <div className = 'collection-footer'>
            <span className='name'> {name} </span>
            <span className='price'> {price} </span>
        </div> 
        {/*read line 27 first, then come back and read this,
        now we are going to call that function, which dispatches the addItem action,
        and we are going to pass though the item that we deconstructed off of the props */}
        <CustomButton onClick ={()=>addItem(item)}>Add Item</CustomButton>
    </div>
    )
    
}

const mapDispatchToProps = dispatch =>({
    //when we call the addItem function in CollectionItem component, we are going
    //to dispatch the addItem action, with whatever paremeter we pass in, now read line 19
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);