import React from 'react'
import "./footer.css"
import Divider from '@material-ui/core/Divider';

function Footer() {
    return (
        <div className="footer">
            <div className="footer_toptext">
                <p>Français (France)</p>
                <p>English (US)</p>
                <p>Español</p>
                <p>Türkçe</p>
                <p>العربية</p>
                <p>Italiano</p>
                <p>Deutsch</p>
                <p>Deutsch</p>
                <p>हिन्दी</p>
                <p>中文(简体)</p>
                <p>F日本語</p>
            </div>
            <Divider/>
            <div className="footer_bottomtext">
                <p>S’inscrire</p>
                <p>Connexion</p>
                <p>Messenger</p>
                <p>Facebook Lite</p>
                <p>Watch</p>
                <p>Personnes</p>
                <p>Pages</p>
                <p>Catégories de Page</p>
                <p>Lieux</p>
                <p>Jeux</p>
                <p>Lieux</p>
                <p>Marketplace</p>
                <p>Facebook Pay</p>
            </div>
        
            <div className="footer_bottomtext">
                <p>Groupes</p>
                <p>Oculus</p>
                <p>Portal</p>
                <p>Instagram</p>
                <p>Local</p>
                <p>Collectes de fonds</p>
                <p>Services</p>
                <p>Élections - Centre d’information</p>
                <p>À propos</p>
                <p>Créer une publicité</p>
                <p>Lieux</p>
                <p>Marketplace</p>
                <p>Facebook Pay</p>
            </div>
            <div className="footer_bottomtext">
                <p>Créer une Page</p>
                <p>Développeurs</p>
                <p>Emplois</p>
                <p>Confidentialité</p>
                <p>Cookies</p>
                <p>Choisir sa pub</p>
                <p>Conditions générales</p>
                <p>Aide</p>
            </div>
            <div className="footer_bottom">
                <p>Facebook © 2020</p>
            </div>
        </div>
    )
}

export default Footer
