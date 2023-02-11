// import {
//   BrowserRouter,
//   Route,
//   Routes
// } from 'react-router-dom'
import './App.css';
import Test from './components/Test';
import migra_mind from './img/migra_mind.png';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={migra_mind} className="" alt="" />
        <p>
          Let's code it!
        </p>
      </header>
      <Test />
  </div>
  );
}

export default App;
