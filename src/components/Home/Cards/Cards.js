import React from 'react'
import styles from './Cards.module.css'

import Card from './Card/Card'
// import card01 from '../../../img/card01.jpg'
// import card02 from '../../../img/card02.jpg'
// import card03 from '../../../img/card03.jpg'
import card04 from '../../../img/card04.jpg'
import card05 from '../../../img/card05.jpg'
import card06 from '../../../img/card06.jpg'
// import card07 from '../../../img/card07.png'
import card08 from '../../../img/card08.jpg'

const Cards = () => {
  return (
    <section className={`container ${styles.cards}`}>
      <Card title='ALERTA DE VIAGENS' 
         image={card04} alt='card01' 
        description=
        {`
            ALERTA DE VIAGENS-GARANTINDO SUA TRANQUILIDADE EM CADA 
            JORNADA. MANTENHA-SE SEGURO E INFORMADO EM TODAS 
            AS AVENTURAS PELO MUNDO
        `}  
        linkButton='/'
      />
      <Card title='ALERTA DE VIAGENS' 
         image={card05} alt='card02' 
        description=
        {`
            ALERTA DE VIAGENS-GARANTINDO SUA TRANQUILIDADE EM CADA 
            JORNADA. MANTENHA-SE SEGURO E INFORMADO EM TODAS 
            AS AVENTURAS PELO MUNDO
        `}  
        linkButton='/'
      />
      <Card title='ALERTA DE VIAGENS' 
         image={card08} alt='card03' 
        description=
        {`
            ALERTA DE VIAGENS-GARANTINDO SUA TRANQUILIDADE EM CADA 
            JORNADA. MANTENHA-SE SEGURO E INFORMADO EM TODAS 
            AS AVENTURAS PELO MUNDO
        `}  
        linkButton='/'
      />
      <Card title='ALERTA DE VIAGENS' 
         image={card06} alt='card04' 
        description=
        {`
            ALERTA DE VIAGENS-GARANTINDO SUA TRANQUILIDADE EM CADA 
            JORNADA. MANTENHA-SE SEGURO E INFORMADO EM TODAS 
            AS AVENTURAS PELO MUNDO
        `}  
        linkButton='/'
      />
      <Card title='ALERTA DE VIAGENS' 
         image={card05} alt='card05' 
        description=
        {`
            ALERTA DE VIAGENS-GARANTINDO SUA TRANQUILIDADE EM CADA 
            JORNADA. MANTENHA-SE SEGURO E INFORMADO EM TODAS 
            AS AVENTURAS PELO MUNDO
        `}  
        linkButton='/'
      />
      <Card title='ALERTA DE VIAGENS' 
         image={card08} alt='card06' 
        description=
        {`
            ALERTA DE VIAGENS-GARANTINDO SUA TRANQUILIDADE EM CADA 
            JORNADA. MANTENHA-SE SEGURO E INFORMADO EM TODAS 
            AS AVENTURAS PELO MUNDO
        `} 
        linkButton='/' 
      />
        <Card title='ALERTA DE VIAGENS' 
         image={card06} alt='card07' 
        description=
        {`
            ALERTA DE VIAGENS-GARANTINDO SUA TRANQUILIDADE EM CADA 
            JORNADA. MANTENHA-SE SEGURO E INFORMADO EM TODAS 
            AS AVENTURAS PELO MUNDO
        `}  
        linkButton='/'
      />
        <Card title='ALERTA DE VIAGENS' 
         image={card04} alt='card08' 
        description=
        {`
            ALERTA DE VIAGENS-GARANTINDO SUA TRANQUILIDADE EM CADA 
            JORNADA. MANTENHA-SE SEGURO E INFORMADO EM TODAS 
            AS AVENTURAS PELO MUNDO
        `}  
        linkButton='/'
      />
      
    </section>
  )
}

export default Cards
