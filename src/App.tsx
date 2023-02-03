import reactLogo from './assets/react.svg'
import './App.css'
import {Logo} from "./components/Logo";
import {Card} from "./components/Card";
import {Slogan} from "./components/Slogan";

function App() {

    return (
        <div className="App">
            <Logo logo={reactLogo}/>
            <Slogan text={`Vite and React`}/>
            <Card/>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
