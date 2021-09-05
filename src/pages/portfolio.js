import React from 'react';
import Navigation from '../component/Navigation';
import ProjectList from '../component/portfolio/ProjectList';
import styled, { keyframes } from 'styled-components';
import {fadeInRight} from 'react-animations';

const portfolio = () => {
    const FadeInRight = keyframes`${fadeInRight}`;
 
    const FadeRight = styled.div`animation: 1s ${FadeInRight};`;

    return (
        <div className="portfolio">
            <Navigation/>
           <FadeRight><ProjectList/></FadeRight>
        </div>
    );
};

export default portfolio;