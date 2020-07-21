export const addItemToCart = (cartItems, cartItemToAdd) =>{
    //existingCartItem will take the value of any element in the cartItems array that it can "find", where the 
    //cartItem.id == the cartItemToAdd.id
    const existingCartItem = cartItems.find(cartItem=> cartItem.id ==cartItemToAdd.id)
    //if there is one, we copy that element into the existingCartItem and so this if block fires,
    //if there isnt one, it will assume the value of null
    if(existingCartItem){
        //ok so if one does actually exist already, loop over the cartItems array (a property of the state)
        //and return the same array, but wherever the cartItem.id is = to the existingcartItem.id, increment the 
        //quantity by 1
        return cartItems.map(cartItem =>  cartItem.id == existingCartItem.id ? {...cartItem, quantity:cartItem.quantity+1} : cartItem)
    }

    //if no item exists, then just return an array with all the existing elements of cartItems,
    //but append a new object with all of the key:value pairs of cartItemToAdd with a new key:value pair
    //of quantity:1
    return [...cartItems, { ...cartItemToAdd, quantity:1 }]

}
export const removeItem = (cartItems, itemToRemove) =>{
    const existingCartItem = cartItems.find(cartItem=> cartItem.id ==itemToRemove.id)

    if (existingCartItem.quantity==1){
        return  cartItems.filter(cartItem => cartItem.id != itemToRemove.id)

    }
    return (
        cartItems.map((cartItem)=>(
            cartItem.id ==itemToRemove.id ?
            {...cartItem,quantity: cartItem.quantity-1}:
            cartItem
        ))
    )

}