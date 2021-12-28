import {Home} from './components/Home';
import {Details} from './components/Details';
import {Weather} from './components/Weather';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/details/weather" component={Weather} />
      </BrowserRouter>
    </div>
  );
}

export default App;
