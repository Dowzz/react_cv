import React from 'react';
import Experiences from '../component/knowledges/Experiences';
import Hobbies from '../component/knowledges/Hobbies';
import Languages from '../component/knowledges/Languages';
import Otherskills from '../component/knowledges/Otherskills';
import Navigation from '../component/Navigation';
import styled, { keyframes } from 'styled-components';
import {fadeInRight} from 'react-animations';




const Knowledges = () => {

    const fadeUp = keyframes`${fadeInRight}`;
 
    const FadeIn = styled.div`animation: 1s ${fadeUp};`;


    return (
        <div className="knowledges">
            <Navigation/>
            <FadeIn><div className="knowledgesContent">
                <Languages></Languages>
                <Experiences></Experiences>
                <Otherskills></Otherskills>
                <Hobbies></Hobbies>
            </div></FadeIn>
        </div>
    );
};

export default Knowledges;