import { BuyIceCream } from '../IceCream/iceCreamActions'
import { BUY_PIZZA } from './pizzaTypes'

const initialState = {
    numOfPizza: 30
}

const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PIZZA:
            return {
                ...state,
                numOfPizza: state.numOfPizza - 1
            }
        default:
            return state
    }
}

export default pizzaReducer