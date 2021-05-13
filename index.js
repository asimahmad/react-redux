const redux = require('redux')
const createStore = redux.createStore

console.log("from index.js");


const BUY_CAKE = 'BUY_CAKE';

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First Redux action"
    }
}

// (prevState, action) => newState

// state should be an object
const intialState = {
    numOfCakes: 10
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state
    }
}


const store = createStore(reducer)

console.log('Intial state ' + store.getState().numOfCakes)

const unsubscribe = store.subscribe(() => console.log("Updated state " + store.getState().numOfCakes))

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();