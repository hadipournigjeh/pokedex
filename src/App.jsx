import "./App.css"

function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
  </div>
  )
}

const Logo = () => {
  return <header> 
            <div className="App">
             <h1>Welcome to the Pokedex</h1>
             <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="pokedex" />
            </div>
          </header>
          
}

const BestPokemon = () => {
  return <p>My favorite Pokemon is Squirtle</p>
}

export default App;
