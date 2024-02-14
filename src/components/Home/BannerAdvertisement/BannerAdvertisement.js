import React from 'react'
import LeadMoreButton from '../LeadMoreButton/LeadMoreButton'
import styles from './BannerAdvertisement.module.css'

const BannerAdvertisement = () => {
  return (
    <section className={`container ${styles.bannerAdvertisement}`}>
            <div className={styles.content}>
                <h2>SONANGOL</h2>
                <p>FAZ ANÚNCIO DE CONCURSO PÚBLICO</p>
                <LeadMoreButton to='/' />
            </div>
        <div className={styles.overlay}>
        </div>
    </section>
  )
}

export default BannerAdvertisement
