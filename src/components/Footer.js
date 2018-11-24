import React from 'react';
import '../css/Footer.css'

const Footer = () => {
	return (
      <div id="footer" className="jumbotron">
      <footer className="page-footer font-small">
        <a href="#"><i className="fab fa-facebook-square"></i></a>
        <div className="text-center center-block">
            <p className="txt-railway">- CLEANSNKRS.com -</p>
            <br/>
        </div>
        <div className="footer-copyright text-center py-3">© 2018 Copyright - 
          <p href="www.nabil-boucherifi.com"> Nabil Boucherifi</p>
        </div>
      </footer>
      </div>
		);
 };

 export default Footer;