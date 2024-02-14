import React from 'react'
import HeadSection from '../HeadSection/HeadSection'
import styles from './Communique.module.css'

import communique01 from '../../../img/communique01.jpg'
import communique02 from '../../../img/communique02.jpg'
import LeadMoreButton from '../LeadMoreButton/LeadMoreButton'

const Communique = () => {
  return (
    <section className={`container ${styles.communique}`}>
      <HeadSection title='COMUNICADOS' subTitle='EM DESTAQUE' />

      <div className={styles.communiques}>
        <div className={styles.content}>
                <img src={communique02} alt="communique01" />
                <div className={styles.info}>
                    <h3>RELACÇÃO ENTRE ANGOLA E EUA</h3>
                    <p>PARCERIA SÓLIDA, CONECTANDO CONTINENTES, PROMOVENDO,
                        PROMOVENDO A COOPERAÇÃO E O ENTENDIMENTO MÚTUO.
                    </p>
                    <LeadMoreButton to='/' />
                </div>
        </div>
        <div className={styles.content}>
                <img src={communique01} alt="communique01" />
                <div className={styles.info}>
                    <h3>RELACÇÃO ENTRE ANGOLA E EUA</h3>
                    <p>PARCERIA SÓLIDA, CONECTANDO CONTINENTES, PROMOVENDO,
                        PROMOVENDO A COOPERAÇÃO E O ENTENDIMENTO MÚTUO.
                    </p>
                    <LeadMoreButton to='/' />
                </div>
        </div>
        <div className={styles.content}>
                <img src={communique01} alt="communique01" />
                <div className={styles.info}>
                    <h3>RELACÇÃO ENTRE ANGOLA E EUA</h3>
                    <p>PARCERIA SÓLIDA, CONECTANDO CONTINENTES, PROMOVENDO,
                        PROMOVENDO A COOPERAÇÃO E O ENTENDIMENTO MÚTUO.
                    </p>
                    <LeadMoreButton to='/' />
                </div>
        </div>
        <div className={styles.content}>
                <img src={communique02} alt="communique01" />
                <div className={styles.info}>
                    <h3>RELACÇÃO ENTRE ANGOLA E EUA</h3>
                    <p>PARCERIA SÓLIDA, CONECTANDO CONTINENTES, PROMOVENDO,
                        PROMOVENDO A COOPERAÇÃO E O ENTENDIMENTO MÚTUO.
                    </p>
                    <LeadMoreButton to='/' />
                </div>
        </div>
      </div>
    </section>
  )
}

export default Communique
