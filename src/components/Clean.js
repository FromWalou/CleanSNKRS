import React from 'react';
import '../css/Home.css'
import '../css/Clean.css'
import clean from '../img/nettoyage.png'

const Clean = () => {
	return (
		<div className='jumbotron'>
			<h1 className="display-2">NETTOYAGE</h1>
			<br></br>
        	<hr className="my-4"/>
        	<br></br>
        	<p className="bold">NETTOYAGE EN PROFONDEUR</p>
        	<ul>
        		<li className="puce">MATIÈRES STANDARDS 19 €</li>
        		<li className="puce">MATIÈRES PREMIUM 25 €</li>
        	</ul>
        	<hr className="my-4"/>
        	<p className="bold">En savoir + :</p>
        	<p>Pour un nettoyage classique  ou en profondeur  intérieur/extérieur, un délai de 3 à 5 jours ouvrables est à prévoir.</p>
        	<p> Nous traitons toutes les matières Premium ou standards : cuir, nubuck, vernis, nylon, simili, toile ...</p>
	        <hr className="my-4"/>
                <img src={clean} class="img-center"/>
                </div>
		);
};

export default Clean;