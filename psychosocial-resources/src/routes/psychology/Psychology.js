import Psy from '../../img/psy-1.jpg';
import './Psychology.css'

const Psychology = () => {
    return(
        <div>
            <div className="page">
                <main className="main">
                    <img src={Psy} />
                    <div className="card-bottom">
                        <div className='card-main'>
                            <h3 align="center">Why is psychology important?</h3>
                            <p>Psychology is defined as a science of social study specialized in the comprehensive analysis of mental processes and behavior of human beings, from an individual and collective approach in different events of daily life. Its main function is to help man understand his processes and develop solutions that help him and his environment, using other branches to understand all the factors involved (biology, medicine, psychiatry, sociology, education, etc.)</p>
                            <a  target="blank" href='https://unibetas.com/que-es-la-psicologia'>More info</a>
                        </div>
                        <div className='card-main'>
                            <h3 align="center">Advantages of seeing a psychologist</h3>
                            <p>Imagine being able to dialogue and receive help without judging. The psychologist is a qualified professional, capable of listening to the patient in a neutral way, establishing a relationship based on respectful dialogue, with the aim of establishing mechanisms to develop their emotional state or solutions to reduce their mental suffering.</p>
                            <a  target="blank" href='https://mejorconsalud.as.com/7-motivos-ir-al-psicologo/'>More info</a>
                        </div>
                    </div>
                </main>
                <div className="sidebar">
                    <h3 align="center">World psychology day</h3>
                    <div className='card-side'>
                        <h3>October 10th. World Mental Health Day (WHO)</h3>
                        <p>Its objectives are to raise awareness in society about mental disorders, fight against the stigmatization suffered by affected people and promote initiatives that improve care.</p>
                        <a target="blank" href='https://www.aquinoscuidamos.org/2021/09/18/guia-autocuidado/#:~:text=Actividades%20como%20cantar%2C%20bailar%2C%20tocar,y%20mejoran%20nuestra%20salud%20mental.'>More info</a>
                    </div>
                    <div className='card-side'>
                        <h3 align="center">Mental health and its importance</h3>
                        <p>The WHO defines mental health as "a state of well-being in which each individual develops their potential, can cope with the stresses of life, can work productively and fruitfully, and can contribute something to their community."</p>
                        <a target="blank" href='https://www.who.int/es/news/item/03-06-2022-why-mental-health-is-a-priority-for-action-on-climate-change#:~:text=La%20OMS%20define%20la%20salud,aportar%20algo%20a%20su%20comunidad%C2%BB.'>More info</a>
                    </div>
                    <div className='card-side'>
                        <h3 align="center">Do I need psychological help?</h3>
                        <p>People often tend to think that we have the key to open all doors, including those that are impossible to open.</p>
                        <a target="blank" href='https://cenitpsicologia.com/saber-necesito-ayuda-psicologica/'>More info</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Psychology;