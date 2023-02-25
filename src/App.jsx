import "./App.css"
import CaughtPokemon from "./CaughtPokemon";
import Logo from "./Logo"
import BestPokemon from "./BestPokemon"


function App() {
  return (
    <div className="App">
      <Logo appName="Hadi" />
      <BestPokemon />
      <CaughtPokemon />
  </div>
  )
}

export default App;
