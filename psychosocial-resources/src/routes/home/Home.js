/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
// import { useNavigate } from 'react-router-dom'
import Migramind from '../../img/OFICIAL.gif';
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
                <h1 className="titulo">
                    WELCOME to
                </h1>
                <img src={Migramind} />
                <h5 className="card-title">
                Is an information platform on mental health in Barcelona that allows immigrants and refugees to find out about all the psychological help they can access for free.
                </h5>
                
            </div>
            <div className="row">
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">IV European meeting on women's mental health</h5>
        <p className="card-text">The Catalan Society of Psychiatry and Mental Health organizes the IV European Meeting on Women's Mental Health, Psychosis and Gender, which will be held on March 9 and 10, 2023 in Barcelona.</p>
        <a className="ov-btn-grow-ellipse" target="blank" href="https://www.wmhbarcelona.com/" >Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Is it more difficult for people with high abilities to find meaning in life?</h5>
        <p className="card-text">Next March 7 at 8:00 p.m. (Spanish time), don't miss this event presented by Maribel Rodríguez, director of the Specialization Diploma in Logotherapy and Existential Analysis applied to the UNIR clinic!</p>
        <a  className="ov-btn-grow-ellipse" target="blank" href="https://www.unir.net/evento/openclass/sentido-de-la-vida-altas-capacidades/?utm_campaign=psiquiatria" >Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">FUNDACION QUIRONSALUD</h5>
        <p className="card-text">Free content prepared by educational psychologists and adapted to the secondary school curriculum. Co-created with students and scientifically endorsed by health professionals from Quirónsalud.</p>
        <a className="ov-btn-grow-ellipse" target="blank"href="https://stayhealthyaulavirtual.es/tematicas-educativas/">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
            {/* <button onClick={navigateToEvents}>
                Events
            </button> */}
        </div>
    );
};

export default Home;