import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Buttons.module.css'

const Buttons = () => {
  return (
    <div className={styles.buttons}>
        <li><NavLink className={styles.services} >SERVIÇOS</NavLink></li>
        <li className={styles.language}>
            <NavLink >EN</NavLink>
            <NavLink className={styles.activeLanguage} >PT</NavLink>
        </li>
        <form>
            <input placeholder='BUSCAR'/>
        </form>
    </div> 
  )
}

export default Buttons
