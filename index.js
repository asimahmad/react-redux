const redux = require('redux')
const createStore = redux.createStore

console.log("from index.js");


const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE = 'BUY_ICE';

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

// (prevState, action) => newState

// state should be an object
const intialState = {
    numOfCakes: 10,
    numOfIces: 20
}

const reducer = (state = intialState, action) => {
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


const store = createStore(reducer)

console.log('Intial state ' + store.getState().numOfCakes)
console.log('Intial state ' + store.getState().numOfIces)

const unsubscribe = store.subscribe(() => console.log("Updated state " + store.getState().numOfCakes + " " + store.getState().numOfIces))

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIce());
store.dispatch(buyIce());
unsubscribe();