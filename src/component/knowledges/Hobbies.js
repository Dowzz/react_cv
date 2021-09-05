import React, {useEffect} from 'react';
import $ from 'jquery'

const Hobbies = () => {
  useEffect(() =>{
    var x=$(document.getElementsByClassName('hide'));
    x.addClass('hidded')
})
const toggle = () =>{
    var x=$(document.getElementsByClassName('hide'));
    if ($(x).hasClass('hidded')){
        $(x).removeClass('hidded');
    }else{
        $(x).addClass('hidded');
    }   
}

    return (
        <div className="hobbies">
            <h3 onClick ={toggle}>Centres d'intérêts</h3>
            <ul>
                <li className="hobby hide">
                  <i className="fas fa-file-code"></i> 
                  <span>Dev web et logiciel</span> 
                </li>
                <li className="hobby hide">
                  <i className="fas fa-broadcast-tower"></i> 
                  <span>Web radio</span> 
                </li>
                <li className="hobby hide">
                  <i className="fab fa-android"></i> 
                  <span>Technologie Android</span> 
                </li>
                <li className="hobby hide">
                  <i className="fas fa-gamepad"></i> 
                  <span>Jeux videos</span> 
                </li>
                <li className="hobby hide">
                  <i className="fas fa-rss-square"></i> 
                  <span>Veille informatique</span> 
                </li>
                <li className="hobby hide">
                  <i className="fab fa-unity"></i> 
                  <span>Unity</span> 
                </li>
                <li className="hobby hide">
                  <i className="fas fa-film"></i>
                  <span>Cinema et séries</span> 
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;