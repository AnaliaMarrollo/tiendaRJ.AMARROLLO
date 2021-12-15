import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

//STYLES
import "./Footer.scss"

const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer-container">

                <Link to={"/"} className="footer-text footer-link footer-header" >
                B A K E R Y ♡
                </Link>

                <div className="footer-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon"/>
                    <h5 className="footer-text">Local - Take Away: <span className="footer-text-span">Calle falsa 123</span></h5>
                </div>

                <div className="footer-item footer-item-redes">
                    <h5 className="footer-text">¡Encontranos en las redes!</h5>
                    <FontAwesomeIcon icon={faFacebook} className="footer-icon"/>
                    <FontAwesomeIcon icon={faInstagram} className="footer-icon"/>
                </div>

                <div className="footer-item">
                    <FontAwesomeIcon icon={faEnvelope} className="footer-icon"/>
                    <h5 className="footer-text">Escribinos: <span className="footer-text-span">bakery@bakery.com.ar</span></h5>
                </div>
                <div className="footer-item footer-item-copyright">
                    <h5 className="footer-text footer-text-copyright">Copyright © | 2021 | B A K E R Y | Todos los Derechos Reservados. <a href="https://github.com/AnaliaMarrollo" className="footer-link">Diseñado por Analía Marrollo ♥</a></h5>
                </div>
                
            </footer>
  
        </>
    )
}

export default Footer
