import React from 'react'
import styles from './hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Vamos casar!</h1>
        <p>Sábado, 20 Setembro de 2025</p>
      </div>
    </section>
  )
}

export default Hero