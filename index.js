const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

console.log("from index.js");


const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE = 'BUY_ICE';
const BUY_PIZZA = 'BUY_PIZZA';

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First Redux action"
    }
}

function buyIce() {
    return {
        type: BUY_ICE,
        info: "First Redux action"
    }
}

function buyPizza() {
    return {
        type: BUY_PIZZA,
        info: "First Redux action"
    }
}
// (prevState, action) => newState

// state should be an object
const intialState = {
    numOfCakes: 10,
    numOfIces: 20
}

const initialPizzaState = {
    numOfPizza: 15
}

const reducers = (state = intialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }

        case BUY_ICE:
            return {
                ...state,
                numOfIces: state.numOfIces - 1
            }
        default:
            return state
    }
}


const pizzaReducer = (state = initialPizzaState, action) => {
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

const root_reducer = combineReducers({
    cake_ice: reducers,
    pizza: pizzaReducer
})

const store = createStore(root_reducer, applyMiddleware(logger))

console.log('Intial state ' + store.getState().cake_ice.numOfCakes)
console.log('Intial state ' + store.getState().cake_ice.numOfCakes)
console.log('Intial state ' + store.getState().pizza.numOfPizza)

const unsubscribe = store.subscribe(() => console.log("Updated state " + store.getState().cake_ice.numOfCakes + " " + store.getState().cake_ice.numOfIces + " " + store.getState().pizza.numOfPizza))

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIce());
store.dispatch(buyIce());
store.dispatch(buyPizza());
store.dispatch(buyPizza());
unsubscribe();