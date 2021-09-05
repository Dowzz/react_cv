import React from 'react';
import Navigation from '../component/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Mail from '../component/contact/Mail';
import styled, { keyframes } from 'styled-components';
import {fadeIn} from 'react-animations';



const Contact = () => {
    const fadingIn = keyframes`${fadeIn}`;

 
    const FadeIn = styled.div`animation: 3s ${fadingIn};`;

   
    
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez moi</h1>
                    <ul>
                        <FadeIn><li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Caen</span>
                        </li></FadeIn>
                        <FadeIn><li>
                        <i className="fas fa-mobile-alt"></i>
                                <CopyToClipboard text="0685613874">
                                    <span className="clickInput"onClick={() =>{
                                        alert('Téléphone copié !')
                                    }}>06.85.61.38.74</span>
                                </CopyToClipboard>
                        </li></FadeIn>
                        <FadeIn><Mail></Mail></FadeIn>
                    </ul>
                    
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a href="https://www.linkedin.com/in/michel-barny-02b622135/">
                            <h4>Linkedin</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Dowzz">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://twitter.com/barny_michel">
                            <h4>Twitter</h4>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://codepen.io/dowzz">
                            <h4>CodePen</h4>
                            <i className="fab fa-codepen"></i>
                        </a>
                    </ul>
            </div>
            </div>
 

        </div>
    );
};

export default Contact;