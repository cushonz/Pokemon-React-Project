import logo from './Assets/pokeball.svg';
import './Styling/App.css';
import Grid from './Components/grid'
import Select from "react-select/base";
import {useState} from "react";


const options = [
     {value : 'Chocolate', label: 'Chocolate'},
     {value : 'vannila', label: 'vanilla'}
 ]
function App() {
    const [setSelected] = useState(0);
    const handleChange = e => {
        setSelected(e.value);
    }
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Grid />

            <form>
                <Select
                    options ={options}
                    placeholder="Generation"
                    onChange={handleChange}
                />
            </form>


            <p>
          </p>

        </header>
      </div>
  );
}

export default App;
