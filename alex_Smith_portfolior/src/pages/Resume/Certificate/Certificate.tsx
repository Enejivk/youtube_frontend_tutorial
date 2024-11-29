import React from 'react'
import SectionSubtitle from '../../../Components/SectionSubtitle/SectionSubtitle'
import styles from './Certificate.module.css'
import less from '../../../assets/personal/less.png'
import jQuery from '../../../assets/personal/jQuery.png'

interface CertificateCardProps {
  name: string;
  id: string;
  date: string;
  logo: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  name,
  id,
  date,
  logo,
}) => {
  return (
    <div className={styles.certCard}>
      <div>
        <img src={logo} alt="Certificate Logo" />
      </div>

      <div>
        <h2 className={styles.certName}>{name}</h2>
        <p className={styles.cerId}>{id}</p>
        <p className={styles.certDate}>{date}</p>
      </div>

    </div>
  )
}

const Modal: React.FC<{ certImage: string }> = ({ certImage }) => {
  return (
    <div className={styles.modal}>
      <img src={certImage} alt="Certificate Logo" />
      <h1 className={styles.closeIcon}>x</h1>
    </div>
  )
}

const Certificate = () => {
  return (
    <div className={styles.certSection}>
      <SectionSubtitle title="Certificates" />
      <div className={styles.certCardContainer}>
        <CertificateCard
          name='Psyhology of Intertnation Design'
          id='Membership ID: XXXX'
          date='19 April 2018'
          logo={less}
          
        />

        <CertificateCard
          name='Anatomy of Intertnation Design'
          id='Membership ID: XXXX'
          date='19 April 2018'
          logo={less}
        />
      </div>
      {/* <Modal
        certImage="https://cdn.pixabay.com/photo/2024/02/22/00/27/iguana-8588842_960_720.jpg"
      /> */}
    </div>
  )
}

export default Certificate
