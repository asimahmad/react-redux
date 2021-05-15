import logo from './logo.svg';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from './Components/CakeContainer'
import HooksCakeContainer from './Components/HooksCakeContainer'
import IceCreamContainer from './Components/IceCreamContainer'

function App() {
    return ( <
        Provider store = { store } >
        <
        div className = "App" >
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