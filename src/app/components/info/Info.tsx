'use client'
import dynamic from "next/dynamic";
import React from 'react'
import styles from './info.module.css'

const Map = dynamic(() => import('@/app/shared/ui/map'), { ssr: false })

const Info = () => {
    return (
        <section className={styles.cerimony}>
            <h1>Cerimónia</h1>
            <p>Aqui podem encontrar todas as informações sobre o nosso grande dia!</p>
            <div className={styles.cerimonyContent}>
                <div className={styles.cerimonyCard}>
                    <h3>Recepção</h3>
                    <h6>A partir das 10h</h6>

                    <Map position={{ lat: 38.819498, lng: -9.124647 }} />

                    <p style={{ fontSize: '1rem' }}>
                        <span className="font-bold text-lg">Noivo: </span>
                        Travessa Joaquim Namorado, Lote 130, 2680-387 Unhos
                    </p>
                    <Map position={{ lat: 38.824290, lng: -9.122738 }} />
                    <p style={{ fontSize: '1rem' }}><span className="font-bold text-lg">Noiva: </span>Rua da Esperança nº1, 2680-434 Unhos</p>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.4"
                    height="600"
                    className={styles.verticalDividerSvg}
                >
                    <rect width="0.4" height="600" fill="var(--terracotta)" />
                </svg>

                <div className={styles.cerimonyCard}>
                    <h3>Celebração</h3>
                    <h6>Início da cerimónia às 11 horas</h6>
                    <Map position={{ lat: 38.82652777798557, lng: -9.124617141106835 }} />

                    <p style={{ fontSize: '1rem' }}>
                        Igreja de São Silvestre, Largo de São Silvestre, Unhos
                    </p>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.4"
                    height="600"
                    className={styles.verticalDividerSvg}
                >
                    <rect width="0.4" height="600" fill="var(--terracotta)" />
                </svg>

                <div className={styles.cerimonyCard}>
                    <h3>Copo de àgua</h3>
                    <h6>Brindamos juntos na Quinta das Riscas</h6>
                    <Map position={{ lat: 38.67851762648617, lng: -8.75477865788261 }} />
                    <p style={{ fontSize: '1rem' }}>
                        Rua Luís de Camões, 117, St. Isidro de Pegões
                    </p>
                </div>
            </div>
        </section >
    )
}

export default Info