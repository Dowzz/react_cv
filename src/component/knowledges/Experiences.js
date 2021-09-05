import React, {useEffect} from 'react';
import $ from 'jquery'
const Experiences = () => {
    useEffect(() =>{
        var x=$(document.getElementsByClassName('hidden'));
        x.addClass('hidded')
    })
    const toggle = () =>{
        var x=$(document.getElementsByClassName('hidden'));
        if ($(x).hasClass('hidded')){
            $(x).removeClass('hidded');
        }else{
            $(x).addClass('hidded');
        }   
    }

    return (
        <div className="experience">
            <h3 onClick={toggle} >Expérience</h3>
            <div className="hidden exp-1">
                <h4>Webhelp Caen, Prestataire</h4>
                <h5>2018 à aujourd'hui</h5>
                <p>Téléconseiller confirmé
                Acquisition nouveaux clients</p>
            </div>
            <div className="hidden exp-2">
                <h4>Activités dans le Développement Web</h4>
                <h5>2016 à 2018</h5>
                <p>Création d'un site web
                developpement d'un jeu Android</p>
            </div>
            <div className="hidden exp-3">
                <h4>Armatis, Prestataire</h4>
                <h5>2011 à 2016</h5>
                <p>Téléconseiller confirmé
                Ecoute active, Formation, Assurance, Service
                Client, Vente de services</p>
            </div>
            <div className="hidden exp-4">
                <h4>Start People intérim</h4>
                <h5>Juin à Aout 2011</h5>
                <p>Missions Intérimaires
                Polyvalence, Usinage, Manutention
                Préparation de Commande</p>
            </div>
            <div className="hidden exp-5">
                <h4>Troc.Com, Depot Vente</h4>
                <h5>Avril 2007 à Juin 2011</h5>
                <p>Vendeur Polyvalent
                Installation, Maintenance, Vente
                Service après vente,Préparation de Commande
                Conseil Client, Caisse</p>
            </div>
            <div className="hidden exp-6">
                <h4>Diverses Agences Interimaires</h4>
                <h5>2005 à 2006</h5>
                <p>Ouvrier Polyvalent
                Manoeuvre, Agent de Conditionnement</p>
            </div>
            <div className="hidden exp-7">
                <h4>Les Chiffonniers de la Joie</h4>
                <h5>2004 à 2005</h5>
                <p>Ouvrier Polyvalent
                Maintenance, Déménagement, Tenue de Caisse</p>
            </div>
        </div>
    );
};

export default Experiences;