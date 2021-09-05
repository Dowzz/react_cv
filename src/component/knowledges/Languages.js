import React, { Component } from 'react'
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state={
        languages : [
            {id:1, value:"HTML", xp:2},
            {id:2, value:"CSS", xp:2},
            {id:6, value:"SASS", xp:1.8},
            {id:3, value:"JS, Jquery", xp:2},
            {id:4, value:"PHP", xp:2},
            {id:5, value:"Mysql", xp:2},
            {id:7, value:"MariaDB", xp:2},
        ],
        frameworks :[
            {id:1, value:"React", xp:0.8},
            {id:2, value:"ReactNative", xp:0.8},
            {id:3, value:"Wordpress", xp:1.5},
            {id:4, value:"Symphony", xp:0.8},
            {id:5, value:"Laravel", xp:1.8},
            {id:6, value:"Bootstrap", xp:1.8},
            {id:7, value:"Bulma", xp:0.8},   

        ]
    }

    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFramework">
                <ProgressBar
                    languages ={languages}
                    className ='languagesDisplay'
                    title ="languages"
                />
                <ProgressBar 
                    languages ={frameworks}
                    className ='frameworksDisplay'
                    title ="frameworks & bibliothèques"
                    />
            </div>
        )
    }
}

export default Languages;
