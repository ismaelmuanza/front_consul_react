import React from 'react'
import { Link } from 'react-router-dom'
import styles from './LeadMore.module.css'

const LeadMore = (props) => {
    const {to, leadMore} = props
  return <Link className={`container ${styles.leadMore}`} to={to}>{leadMore}</Link>
}

export default LeadMore
