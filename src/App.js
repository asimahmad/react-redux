import logo from './logo.svg';
import './App.css';
import User from './user'

function App() {
    return ( <
        div className = "App" >
        <
        User user = {
            { name: "Asim", skills: { pro: "React" } } } > < /User> <
        /div>
    );
}

export default App;