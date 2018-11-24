import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import jordan from '../img/jordan.jpg';
import airmax from '../img/airmax.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
	return (
<div className="Home">
        <div className="jumbotron">
        <h1 className="display-2">CLEAN SNKRS</h1>
        <h3 className="display-5">Le premier site 100% en ligne pour soigner tes sneakers</h3>
        <br></br>
        <hr className="my-4"/>
        <br></br>
        <Carousel>
                <div>
                    <img src={jordan} />
                    <p className="legend">NETTOYAGE</p>
                </div>
                <div>
                     <img src={airmax} />
                    <p className="legend">RÉNNOVATION</p>
                </div>
            </Carousel>
        <br></br>
        <hr className="my-4"/>
        <br></br>
        <h4 className="display-5">NETTOYAGE SNEAKERS - RÉNNOVATION SNEAKERS</h4>
        <hr className="my-4"/>
        <Link className="a" to="/clean"><button type="submit" className="btn btn-md btn-block">NETTOYAGE</button></Link>
        <br></br>
        <Link className="a" to="/recondition"><button type="submit" className="btn btn-md btn-block">RÉNNOVATION</button></Link>
      </div>
    </div>
	);

};

export default Home;