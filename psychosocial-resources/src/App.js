// import {
//   BrowserRouter,
//   Route,
//   Routes
// } from 'react-router-dom'
import './App.css';
import Test from './components/Test';
import migra_mind from './img/migra_mind.png';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigationbar from './components/Navigationbar';
import RenderEventCard from './components/RenderEventCard';

function App() {

  return (
    <div className="App">
      < Navigationbar />
      <header className="App-header">
        <img src={migra_mind} className="" alt="" />
        <p>
          Let's code it!
        </p>
      </header>
      <Test />
      <RenderEventCard />
  </div>
  );
}

export default App;
