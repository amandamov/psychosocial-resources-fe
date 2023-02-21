import Navigationbar from '../../components/Navigationbar';
import { Route, Routes, useNavigate } from 'react-router-dom'
import Events from "../events/Events";
import Layout from '../layout/Layout';
import Migramind from '../../img/migra_mind.png';
import './Home.css'


const Home = () => {
    const navigate = useNavigate();

    const navigateToEvents = () => {
        navigate('events')
    }

    return (
        <div>
            <Navigationbar />
            <div className='home'>
                <h1>
                    This will be our Home page
                </h1>
                <img src={Migramind} />
            </div>
            <button onClick={navigateToEvents}>
                Events
            </button>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path='events' element={<Events />} />
                </Route>
            </Routes>
        </div>
    );
};

export default Home;
