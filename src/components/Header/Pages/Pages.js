import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Pages.module.css'

const Pages = () => {
  return (
    <div className={styles.pages}>
        <li> <NavLink>ANGOLA</NavLink></li>
        <li> <NavLink>CONSULADO</NavLink></li>
        <li> <NavLink>SOBRE</NavLink></li>
        <li> <NavLink>CONTATOS</NavLink></li>
    </div>
  )
}

export default Pages
