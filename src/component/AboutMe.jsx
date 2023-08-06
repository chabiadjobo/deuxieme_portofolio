import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { faGithub, faLinkedin, faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './aboutMe.module.css';

export const AboutMe = () => {
  let github = { url: 'https://github.com/chabiadjobo', title: 'Me trouver sur Github'};
  let linkedin = { url: 'https://linkedin.com/in/ayedesso-marc-aurele-chabi-adjobo', title: 'Me trouver sur linkedin'};
  let twitter = { url: 'https://twitter.com/Ayedesso2200220', title: 'Laissez moi un tweet'};
  let mail = { url: 'mailto:chamaurele@yahoo.fr', title: 'Envoyer moi un email'};

  return (
    <div className={ styles.sectionMboutMe } id="aboutMe">
      <h1 className={ styles.titleName }>CHABI ADJOBO Ayédesso M. A.</h1>
      <TypeAnimation
        sequence={['Data Scientist', 1000, 
                  'Ingénieur biostatisticien', 1000, 
                  'Ingénieur en management de projet', 1000, 
                  'Data Engineer', 1000]}
                      //  Replacing previous Text
        wrapper="h4"
        repeat={Infinity}
      />
  
      <p>
        Mon expérience en gestion et analyse de données, ainsi que mes compétences en machine learning, NLP, Deep learning et Big data, font de moi un atout pour résoudre des problèmes concrets.
      </p>


      <p className={ styles.logoSocial }>
        <a href={github.url} title={github.title} target='new'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href={linkedin.url} title={linkedin.title} target='new'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href={twitter.url} title={twitter.title} target='new'>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href={mail.url} title={mail.title}>
          <FontAwesomeIcon icon={faGoogle} />
        </a>
      </p>
      <div id="skills" />
    </div>
  )
}
