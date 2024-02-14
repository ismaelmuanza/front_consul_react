import React from 'react'
import LeadMoreButton from '../../LeadMoreButton/LeadMoreButton'
import styles from './Card.module.css'


const Card = (props) => {
    const {title, image, alt, description, linkButton} = props

  return (
    <div className={styles.card}>
      <img src={image} alt={alt}/>
      <div className={styles.cardInfo}>
          <h5>{title}</h5>
          <p>{description}</p>
        <LeadMoreButton to={linkButton} />
      </div>
    </div>
  )
}

export default Card
