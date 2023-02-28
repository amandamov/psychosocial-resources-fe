import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import Home from './routes/home/Home';
import Events from './routes/events/Events';
import About from './routes/about/About';
import Team from './routes/team/Team';
import Layout from './routes/layout/Layout';
import SingleEvent from './routes/single-event/SingleEvent';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route element={<Events />} path='events' />
          <Route element={<SingleEvent />} path='events/:id' />
          <Route element={<About />} path='about' />
          {/* <Route element={<Team />} path='team' /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
