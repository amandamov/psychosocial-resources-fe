import Psy from '../../img/psy-1.jpg';
import './Psychology.css'

const Psychology = () => {
    return(
        <div>
            <div className="page">
                <main className="main">
                    <img src={Psy} />
                    <div className="card-bottom">
                        <div className='card'>
                            <h3>this is the title 1</h3>
                            <p>this is the content 1</p>
                            <a href='#'>this is the link 1</a>
                        </div>
                        <div className='card'>
                            <h3>this is the title 2</h3>
                            <p>this is the content 2 this is the content 2 this is the content 2</p>
                            <a href='#'>this is the link 2</a>
                        </div>
                    </div>
                </main>
                <div className="sidebar">
                    <h3>This the sidebar</h3>
                    <div className='card-side'>
                        <h3>this is the title 3</h3>
                        <p>this is the content 3</p>
                        <a href='#'>this is the link 3</a>
                    </div>
                    <div className='card-side'>
                        <h3>this is the title 4</h3>
                        <p>this is the content 4 this is the content 4 this is the content 4 this is the content 4</p>
                        <a href='#'>this is the link 5</a>
                    </div>
                    <div className='card-side'>
                        <h3>this is the title 5</h3>
                        <p>this is the content 5</p>
                        <a href='#'>this is the link 5</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Psychology;