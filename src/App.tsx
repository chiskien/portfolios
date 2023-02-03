import reactLogo from './assets/react.svg'
import './App.css'
import {Logo} from "./components/Logo";
import {Card} from "./components/Card";

function App() {

    return (
        <div className="App">
            <Logo logo={reactLogo}/>
            <h1>Vite + React</h1>
            <Card/>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
