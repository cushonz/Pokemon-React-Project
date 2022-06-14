import logo from './pokeball.svg';
import './App.css';
let pokemon_sprite0 = "https://play.pokemonshowdown.com/sprites/gen5/aipom-f.png"
let pokemon_sprite1 = "https://play.pokemonshowdown.com/sprites/gen5/beedrill-mega.png"
let pokemon_sprite2 = "https://play.pokemonshowdown.com/sprites/gen5/butterfree-gmax.png"
let pokemon_sprite3 = "https://play.pokemonshowdown.com/sprites/gen5/charizard-megax.png"
let pokemon_sprite4 = "https://play.pokemonshowdown.com/sprites/gen5/darkrai.png"
let pokemon_sprite5 = "https://play.pokemonshowdown.com/sprites/gen5/diancie.png"


function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <img src = {pokemon_sprite0} className="Pokemon1" id={'pokemon p1'} alt = "mon"/>
            <img src = {pokemon_sprite1} className="Pokemon2" id={'pokemon p2'} alt = "mon"/>
            <img src = {pokemon_sprite2} className="Pokemon3" id={'pokemon p3'} alt = "mon"/>
            <img src = {pokemon_sprite3} className="Pokemon4" id={'pokemon p4'} alt = "mon"/>
            <img src = {pokemon_sprite4} className="Pokemon5" id={'pokemon p5'} alt = "mon"/>
            <img src = {pokemon_sprite5} className="Pokemon6" id={'pokemon p6'} alt = "mon"/>



            <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;
