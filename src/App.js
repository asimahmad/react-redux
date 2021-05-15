import logo from './logo.svg';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from './Components/CakeContainer'
import HooksCakeContainer from './Components/HooksCakeContainer'
import IceCreamContainer from './Components/IceCreamContainer'
import PizzaContainer from './Components/PizzaContainer'
import NewCakeContainer from './Components/NewCakeContainer'
import ItemContainer from './Components/ItemContainer'

function App() {
    return ( <
        Provider store = { store } >
        <
        div className = "App" > { /* <ItemContainer cake="cake"/> */ } <
        ItemContainer cake / >
        <
        ItemContainer / >
        <
        NewCakeContainer / >
        <
        PizzaContainer / >
        <
        IceCreamContainer / >
        <
        HooksCakeContainer / >
        <
        CakeContainer / >
        <
        /div> <
        /Provider>
    );
}

export default App;