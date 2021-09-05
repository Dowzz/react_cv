import React, {useEffect} from 'react';
import $ from "jquery"

const Otherskills = () => {
    useEffect(() =>{
        var x=$(document.getElementsByClassName('list'));
        x.addClass('hidded')
    })
    const toggle = () =>{
        var x=$(document.getElementsByClassName('list'));
        if ($(x).hasClass('hidded')){
            $(x).removeClass('hidded');
        }else{
            $(x).addClass('hidded');
        }   
    }
    return (
        <>
            <div className="otherSkills">
            <h3 onClick={toggle}>Formations et Compétences</h3>
                <div className="list">
                    <ul>
                        <li><i className="fas fa-check-square"></i><strong>2021-2022</strong> Formation Dev web et web mobile</li>
                        <li><i className="fas fa-check-square"></i><strong>2016-2017</strong> Pré-Formation Dev Logiciel </li>
                        <li><i className="fas fa-check-square"></i><strong>2003-2004</strong> Agent Installation et Maintenance Informatique</li>
                        <li><i className="fas fa-check-square"></i><strong>2000-2003</strong> BEP Secrétariat comptabilité </li>
                    </ul>
                    <ul>
                        <li><i className="fas fa-check-square"></i>Anglais Technique</li>
                        <li><i className="fas fa-check-square"></i>Github</li>
                        <li><i className="fas fa-check-square"></i>Méthodes Agiles</li>
                        <li><i className="fas fa-check-square"></i>Adaptabilité</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Otherskills;