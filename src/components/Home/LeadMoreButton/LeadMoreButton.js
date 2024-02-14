import React from 'react'
import { Link } from 'react-router-dom'
import styles from './LeadMoreButton.module.css'

const LeadMoreButton = (props) => {
    const {to} = props
  return <Link className={styles.leadMoreButton} to={to}>VER MAIS</Link>
}

export default LeadMoreButton
