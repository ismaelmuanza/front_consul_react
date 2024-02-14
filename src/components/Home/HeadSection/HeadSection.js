import React from 'react'
import styles from './HeadSection.module.css'

const HeadSection = (props) => {
    const {title, subTitle} = props
  return (
    <div className={styles.header}>
        <h3>{title}</h3>
        <span>{subTitle}</span>
    </div>

  )
}

export default HeadSection
