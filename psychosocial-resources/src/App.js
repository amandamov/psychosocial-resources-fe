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
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      < Navigationbar />
      {/* <Test /> */}
      <RenderEventCard />
      <Footer />
  </div>
  );
}

export default App;
