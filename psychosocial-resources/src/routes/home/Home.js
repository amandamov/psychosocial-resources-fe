import { Route, Routes, useNavigate } from 'react-router-dom'
import Events from "../events/Events";
import Layout from '../layout/Layout';
import Migramind from '../../img/migra_mind.png';
import './Home.css'
import Header from '../../components/Header';


const Home = () => {
    const navigate = useNavigate();

    const navigateToEvents = () => {
        navigate('events')
    }

    return (
        <div>
            <div className='home'>
                <Header />
                <h1>
                    This will be our Home page
                </h1>
                <img src={Migramind} />
            </div>
            <button onClick={navigateToEvents}>
                Events
            </button>
        </div>
    );
};

export default Home;
