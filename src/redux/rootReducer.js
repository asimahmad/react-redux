import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './IceCream/iceCreamReducer'
import pizzaReducer from './Pizza/pizzaReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    pizza: pizzaReducer
})

export default rootReducer