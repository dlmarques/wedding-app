import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.getInTouch}>
            <h1>Contactos</h1>
            <div className={styles.contactCards}>
                <div className={styles.card}>
                    <h2>Noivo</h2>
                    <p>+351 932958409</p>
                    <p>daniel.marquesedigital@gmail.com</p>
                </div>
                <div className={styles.card}>
                    <h2>Noiva</h2>
                    <p>+351 962275570</p>
                    <p>martasantosoliveiros@gmail.com</p>
                </div>
            </div>
            <p style={{ textAlign: 'center' }} id="copyright">
                © {new Date().getFullYear()} Todos os direitos reservados - Daniel Marques
            </p>
        </footer>
    )
}

export default Footer