// import { useNavigate } from 'react-router-dom'
import Migramind from '../../img/migra_mind.png';
import './Home.css'
import Header from '../../components/Header';


const Home = () => {
    // const navigate = useNavigate();

    // const navigateToEvents = () => {
    //     navigate('events')
    // }

    return (
        <div>
            <div className='home'>
                <Header />
                <h1>
                    MigraMind
                </h1>
                <h1>
                    Health
                </h1>
                <img src={Migramind} />
            </div>
            {/* <button onClick={navigateToEvents}>
                Events
            </button> */}
        </div>
    );
};

export default Home;
