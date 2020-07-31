import {ShopActionTypes} from './shop.types'

export const setCollections= (collectionsMap) =>({
    type: ShopActionTypes.SET_COLLECTIONS,
    payload:collectionsMap,
})