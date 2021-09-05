import React, {useEffect} from 'react';
import $ from 'jquery'

const ProgressBar = (props) => {
    useEffect(() =>{
        var x=$(document.getElementsByClassName('lang'));
        x.addClass('hidded')
    })
    const toggle = () =>{
        var x=$(document.getElementsByClassName('lang'));
        if ($(x).hasClass('hidded')){
            $(x).removeClass('hidded');
        }else{
            $(x).addClass('hidded');
        }   
    }
    return (
        
        <div className = {props.className}>
            <h3 onClick={toggle}>{props.title}</h3>
            <div className="years lang">
                <span>Années d'experience</span>
                <span>1 an</span>
                <span>2 ans</span>
            </div>

            <div>
                {
                    props.languages.map((item) =>{
                        let xpYears = 2;
                        let progressBar = item.xp / xpYears *100 + '%';
                        return (
                            <div key = {item.id} className = "languagesList lang">
                                <li>{item.value}</li>
                                <div className="progressbar" style =
                                {{width:progressBar}}></div>
                            </div>
                        )
                    })
                }
            </div>   
        </div>
    );
};

export default ProgressBar;