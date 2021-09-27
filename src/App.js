import spinningWheel from './spinningWheel.png'
import './App.css'
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={spinningWheel} className="App-logo" alt="logo" />
        <div>
          <h1>MEAL WHEEL</h1>
        </div>
        <div>
          <p>When you gotta eat, but just don't know what to eat</p>
        </div>
      </header>
    </div>
  )
}

export default App
