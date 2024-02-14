import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../img/logo.png'
import mirex from '../../../img/mirex.png'
import styles from './Logos.module.css'

const Logos = () => {
  return (
    <div className={styles.logos}>
       <li>
            <NavLink to='/'>
                <img src={logo} alt='logo' />
            </NavLink>
        </li>
        <li>
            <NavLink>
                <img src={mirex} alt='mirex' />
            </NavLink>
        </li>
    </div>
  )
}

export default Logos
