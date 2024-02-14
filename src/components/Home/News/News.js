import React from 'react'
import Card from '../Cards/Card/Card'
import styles from './News.module.css'
import news01 from '../../../img/news01.jpg'
import news02 from '../../../img/news02.jpg'
import news03 from '../../../img/news03.jpg'
import mainCard from '../../../img/mainCard.jpg'
import HeadSection from '../HeadSection/HeadSection'

const News = () => {
  return (
    <section className={`container ${styles.news}`}>
      
      <HeadSection title='NOTICIAS' subTitle='EM DESTAQUE' />

      <div className={styles.cards}>

           <Card 
                title='RELAÇÕES PÚBLICAS'
                image={mainCard} alt='mainCard'
                description=''
                linkButton='/'
            />
            
            <Card 
                title='EXEMPLO DE TÍTULO DE NOTÍCIA'
                image={news01} alt='news01'
                description=''
                linkButton='/'
            />
              <Card 
                title='EXEMPLO DE TÍTULO DE NOTÍCIA'
                image={news02} alt='news02'
                description=''
                linkButton='/'
            />
              <Card 
                title='EXEMPLO DE TÍTULO DE NOTÍCIA'
                image={news03} alt='news03'
                description=''
                linkButton='/'
            />
              <Card 
                title='EXEMPLO DE TÍTULO DE NOTÍCIA'
                image={news01} alt='news01'
                description=''
                linkButton='/'
            />
              <Card 
                title='EXEMPLO DE TÍTULO DE NOTÍCIA'
                image={news02} alt='news01'
                description=''
                linkButton='/'
            />
              <Card 
                title='EXEMPLO DE TÍTULO DE NOTÍCIA'
                image={news03} alt='news01'
                description=''
                linkButton='/'
            />
              <Card 
                title='EXEMPLO DE TÍTULO DE NOTÍCIA'
                image={news01} alt='news02'
                description=''
                linkButton='/'
            />
              <Card 
                title='EXEMPLO DE TÍTULO DE NOTÍCIA'
                image={news03} alt='news03'
                description=''
                linkButton='/'
            />
      </div>
    </section>
  )
}

export default News
