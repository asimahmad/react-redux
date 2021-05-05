import { ADD_TO_CART } from '../constants'
export const addToCart = (data) => {
    return {
        type: 'Add_TO_CART',
        data: data
    }
}



export const removeToCart = (data) => {
    return {
        type: 'REMOVE_TO_CART',
        data: data
    }
}