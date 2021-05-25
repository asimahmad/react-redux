// const redux = require('redux')
// const createStore = redux.createStore;
// const combineReducers = redux.combineReducers

// console.log("From server.js")

// const CAKE = "CAKE";

// function buyCAKE() {
//     return {
//         type: CAKE,
//         info: "This is the cake shop"
//     }
// }

// const initialState = {
//     noOfCakes: 10
// }

// const reducer = (state = initialState, action) => {
//         switch (action.type) {
//             case CAKE:
//                 return {
//                     ...state,
//                     noOfCakes: state.noOfCakes - 1
//                 }
//             default:
//                 return state
//         }
//     }
//     // const root_reducer = combineReducers({
//     //     cake: reducer
//     // })

// const store = createStore(reducer)

// console.log("Initial State", store.getState().noOfCakes)

// const unsubscribe = store.subscribe(() => console.log("Updated state:", store.getState().noOfCakes))

// store.dispatch(buyCAKE());

// unsubscribe();

console.log("Start")

setTimeout(() => {
    console.log("Callback")
}, 5000)

let startDate = new Date().getTime();
let endDate = startDate
while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
    //console.log(endDate);
}

console.log("While expires");