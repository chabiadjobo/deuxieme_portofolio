import React from 'react';
import styles from './certifications.module.css';
import cirfoss from '../../assets/images/certificates/Attestation_CIRFOSS.png'
import laraze from '../../assets/images/certificates/Attestation_Laraze.png'
import spcan from '../../assets/images/certificates/Attestation_spcan.png'
import upib from '../../assets/images/certificates/Attestation_Upib.png'


// import { ExperienceLine } from '../experience/ExperienceLine';
// import { formations } from '../../data/formationList';

export const Certification = () => {
  return (
    <div className={ styles.sectionCertification }>
      <div className='row'>
        <div className='col-md-12 col-12 mb-5'>
          <h3 className="mt-0">Attestation</h3>
        </div>
      </div>
      <div className='row'>
        <div className="col-md-6">
          <a className={styles.certificationBlock} href="cirfoss" download> 
            <div className="text-center">
              <p>
                <img src={cirfoss} alt="Agile strategic pic" width={150} className='d-block mr-auto mx-auto' />
                <span className='d-block text-capitalize text-center my-2'>Attestation de travail CIRFOSS</span>  
              </p>
            </div>
          </a>
        </div>

        <div className="col-md-6">
          <a className={styles.certificationBlock} href="upib" download> 
            <div className="text-center">
              <p>
                <img src={upib} alt="Agile strategic pic" width={150} className='d-block mr-auto mx-auto' />
                <span className='d-block text-capitalize text-center my-2'>Attestation de travail UPIB</span>  
              </p>
            </div>
          </a>
        </div>

        <div className="col-md-6">
          <a className={styles.certificationBlock} href="laraze" download> 
            <div className="text-center">
              <p>
                <img src={laraze} alt="Agile strategic pic" width={150} className='d-block mr-auto mx-auto' />
                <span className='d-block text-capitalize text-center my-2'>Attestation de travail LARAZE</span>  
              </p>
            </div>
          </a>
        </div>

        <div className="col-md-6">
          <a className={styles.certificationBlock} href="spcan" download> 
            <div className="text-center">
              <p>
                <img src={spcan} alt="Agile strategic pic" width={150} className='d-block mr-auto mx-auto' />
                <span className='d-block text-capitalize text-center my-2'>Attestation de travail SP CAN</span>  
              </p>
            </div>
          </a>
        </div>
        
      </div>
      <span id='certifications' />
    </div>
  )
}
