import Migracode from "../../img/migracode.png";
import './About.css'

const About = () => {
    return (
        <div className="container-about">
            <div className="migracode">
                <img src={Migracode}/>
                <h3>
                    We are web developers trained by <b>Migracode</b> <br></br>
                    and Migramind is our final project where we are applying everything we learned over 7 months.<br></br> 
                    We are immigrants living in Barcelona and our team is made up of people from Brazil, Cape Verde, Colombia and Venezuela.
                </h3>
            </div>
            <div className="team">
                
            </div>
        </div>

    )
};

export default About;