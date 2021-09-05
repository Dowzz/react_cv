import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import {pulse, flipInY} from 'react-animations'


const Navigation = () => {
    const Pulse = keyframes`${pulse}`;
 
    const RollIn = styled.div`animation: 2s  ${Pulse} infinite;`;

    const flip = keyframes`${flipInY}`;
 
    const FlipInY = styled.div`animation: 1s ${flip} infinite;`;

    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/portrait.jpg" alt="profilepic" />
                    <h3>BARNY Michel</h3>
                    <div className="mot mot-1">
                    <span>39 ans</span>
                    <span>Futur Developpeur</span>
                    <span>Web et Mobile</span>
                    <span>Motivé</span>
                    <span>Passionné</span>
                    <span>Disponible</span>
                </div>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <RollIn><li>
                        <NavLink exact to="/"
                         activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li></RollIn>
                    <RollIn><li>
                        <NavLink exact to="/Compétences"
                         activeClassName="navActive">
                            <i className="fas fa-book-open"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li></RollIn>
                    <RollIn><li>
                        <NavLink exact to="/Portfolio"
                         activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Projets</span>
                        </NavLink>
                    </li></RollIn>
                    <li>
                        <RollIn><NavLink exact to="/Contact"
                         activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink></RollIn>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <FlipInY><li>
                        <a href="https://www.linkedin.com/in/michel-barny-02b622135/" target="__blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li></FlipInY>
                    <FlipInY><li>
                        <a href="https://github.com/Dowzz" target="__blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </li></FlipInY>
                    <FlipInY><li>
                        <a href="https://twitter.com/barny_michel" target="__blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    </li></FlipInY>
                    <FlipInY><li>
                        <a href="https://www.facebook.com/Max.AkA.KeelaM" target="__blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                    </li></FlipInY>
                    <FlipInY><li>
                        <a href="https://codepen.io/dowzz" target="__blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
                    </li></FlipInY>
                </ul>
                <div className="signature">
                    <p>Dowzz BY DOM2A-2021</p>
                </div>
            </div>
            
            
        </div>
    );
};

export default Navigation;