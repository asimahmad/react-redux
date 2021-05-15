import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './IceCream/iceCreamReducer'
import pizzaReducer from './Pizza/pizzaReducer'
import userReducer from './user/userReducers'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    pizza: pizzaReducer,
    user: userReducer
})

export default rootReducer