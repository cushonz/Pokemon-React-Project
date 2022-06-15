import logo from './Assets/pokeball.svg';
import './Styling/App.css';
import Grid from './Components/grid'
import {Dropdown} from './Components/dropdown'
import {Element} from "./Components/element";



function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Grid />
            <Dropdown>
                <Element/>
            </Dropdown>



            <p>
          </p>

        </header>
      </div>
  );
}

export default App;
