import React from 'react';
import Navigation from '../component/Navigation';
import styled, { keyframes } from 'styled-components';
import {fadeIn, shake} from 'react-animations'

const Home = () => {

    const fadeUp = keyframes`${fadeIn}`;
 
    const FadeIn = styled.div`animation: 2s ${fadeUp};`;

    const shaking = keyframes`${shake}`;
 
    const Shake = styled.div`animation: 2s ${shaking} infinite;`;

    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <FadeIn><div className="content">
                    <div className="pdf2">  <a href="./media/CV MichelBarny.pdf" 
                        target="_blank" >Télécharger mon CV</a></div>
                <h1 className="titre">Michel Barny</h1>
                    <h2>Développeur Web et Mobile</h2>
                    <p>Je suis Michel Barny, 39 ans, Futur Developpeur Web et Mobile, Motivé,
                Passionné et Disponible.
                    Je vous invite a visiter mon cv,
                    et n'hésitez pas a me contacter si vous souhaiter plus d'informations !</p>
                    <Shake><div className="pdf">
                        <a href="./media/CV MichelBarny.pdf" 
                        target="_blank" >Télécharger mon CV</a>
                    </div>
                    </Shake>
                </div>
                </FadeIn>
                
            </div> 
        </div>
        
    );
};

export default Home;