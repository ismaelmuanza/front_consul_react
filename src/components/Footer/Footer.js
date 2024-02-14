import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import logo02 from '../../img/logo02.png'
import mirex02 from '../../img/mirex02.png'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={`container ${styles.content}`}>
            <div className={styles.itemsLeft}>
                <ul>
                    <li><Link><img src={logo02} alt='logo02' /></Link></li>
                    <li><Link>AGT</Link></li>
                    <li><Link>CNE</Link></li>
                    <li><Link>SEGURANÇA SOCIAL</Link></li>
                </ul>
            </div>
            <div className={styles.itemsCenter}>
                <h4>LINKS ÚTEIS</h4>
                <li><Link>TOP</Link></li>
            </div> 
            <div className={styles.itemsRight}>
                <ul>
                    <li><Link><img src={mirex02} alt='mirex02' /></Link></li>
                    <li><Link>REGISTRO ELEITORAL OFICIOSO</Link></li>
                    <li><Link>SEP.GOV.AO</Link></li>
                    <li><Link>B.I</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )

}

export default Footer
