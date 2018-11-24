import React from 'react';
import '../css/Home.css'
import recup from '../img/recuperation.png';

const Recondition = () => {
	return (
		<div className='jumbotron'>
			<h1 className="display-2">RÉNNOVATION</h1>
			<br></br>
        	<p className="bold">RÉNNOVATION</p>
        	<ul>
        		<li className="puce">DÉJAUNISSEMENT SEMELLE : 30 €</li>
        		<li className="puce">RECOLORATION D’ORIGINE MATIÈRES STANDARD : 45 €</li>
        		<li className="puce">RECOLORATION D’ORIGINE MATIÈRES PREMIUM : 55 €</li>
        		<li className="puce">MIDSOLE REPAINT MATIÈRES STANDARD : 30 €</li>
        		<li className="puce">MIDSOLE REPAINT MATIÈRES PREMIUM : 60 €</li>
        	</ul>
        	<hr className="my-4"/>
        	<p className="bold">En savoir + :</p>
        	<p>Pour les baskets très abîmées, différentes réparations sont proposées à la carte : retouches, désoxydation et recoloration d’origine.</p>
        	<p> Nous traitons toutes les matières Premium ou standards : cuir, nubuck, vernis, nylon, simili, toile ...</p>
			<hr className="my-4"/>
			<img src={recup} class="img-center"/>
		</div>
		);
};

export default Recondition;