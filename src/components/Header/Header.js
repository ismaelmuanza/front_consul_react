import React from 'react'
import Buttons from './Buttons/Buttons'
import Logos from './Logos/Logos'
import Pages from './Pages/Pages'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
        <nav className={styles.navbar}>
            <Logos />
            <Pages />
            <Buttons />
               
        </nav>
      
    </header>
  )
}

export default Header
