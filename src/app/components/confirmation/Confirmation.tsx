'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import styles from './confirmation.module.css'
import { useForm } from '@tanstack/react-form'

const GuestForm = ({ index, form }: { index: number, form: any }) => {
    return (
        <>
            <h2 style={{ paddingTop: '8px' }}>Acompanhante {index + 1}</h2>
            <div className={styles.guestForm}>
                <form.Field name={`guestsList[${index}].name`} children={(field: any) => {
                    return (
                        <>
                            <label htmlFor={`guestsList[${index}].name`}>Nome</label>
                            <input
                                type="text"
                                id={`guestsList[${index}].name`}
                                name={`guestsList[${index}].name`}
                                placeholder="Escreve aqui o nome do acompanhante"
                                onChange={(e) => {
                                    field.handleChange(e.target.value)
                                }}
                            />
                        </>)
                }} />
                <form.Field name={`guestsList[${index}].diet`} children={(field: any) => {
                    return <><label htmlFor={`guestsList[${index}].diet`}>Intolerâncias alimentares (opcional)</label>
                        <input
                            type="text"
                            id={`guestsList[${index}].diet`}
                            name={`guestsList[${index}].diet`}
                            placeholder="Escreve aqui as int. alimentares do acompanhante"
                            onChange={(e) => {
                                field.handleChange(e.target.value)
                            }}
                        /></>
                }} />
                <form.Field name={`guestsList[${index}].age`} children={(field: any) => {
                    return <><label htmlFor={`guestsList[${index}].age`}>Faixa etária</label>
                        <select name={`guestsList[${index}].age`} id={`guestsList[${index}].age`} onChange={(e) => {
                            field.handleChange(e.target.value)
                        }}>
                            <option disabled selected>Escolhe a faixa etária</option>
                            <option value="0-3 anos">0-3 anos</option>
                            <option value="4-9 anos">4-9 anos</option>
                            <option value="Adulto">Adulto (+10 anos)</option>
                        </select>
                    </>
                }} />
            </div>
        </>
    )
}

const Confirmation = () => {
    const [guests, setGuests] = useState(0);
    const form = useForm({
        defaultValues: {
            name: '',
            email: '',
            diet: 'Não tem',
            guests: 0,
            guestsList: [],
        },
        onSubmit: async ({ value }) => {
            const data = { ...value, guestsList: value.guestsList.slice(0, value.guests) }
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API}/confirm`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );
            if (response.ok) {
                alert('Confirmação enviada com sucesso')
                window.location.reload()
            } else {
                alert('Erro ao enviar confirmação')
            }
        },
    })
    return (
        <section className={styles.confirmations}>
            <div className={styles.confirmationContainer}>
                <h1>Confirma a tua presença</h1>
                <h2>até 31 de agosto</h2>
                <form id="form" method="post" onSubmit={(e) => {
                    e.preventDefault()
                    form.handleSubmit()
                }}>
                    <form.Field name="name" children={(field) => {
                        return (
                            <>
                                <label htmlFor="name">Nome</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Escreve aqui o teu primeiro e último nome"
                                    onChange={(e) => {
                                        field.handleChange(e.target.value)
                                    }}
                                />
                            </>)
                    }} />
                    <form.Field name="email" children={(field) => {
                        return (
                            <>
                                <label htmlFor="email">E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Escreve aqui o teu e-mail"
                                    onChange={(e) => {
                                        field.handleChange(e.target.value)
                                    }}
                                />
                            </>)
                    }} />

                    <form.Field name="diet" children={(field) => {
                        return (
                            <>
                                <label htmlFor="diet">Intolerâncias alimentares (opcional)</label>
                                <input
                                    type="text"
                                    name="diet"
                                    placeholder="Escreve aqui as tuas intolerâncias alimentares"
                                    onChange={(e) => {
                                        field.handleChange(e.target.value)
                                    }}
                                />
                            </>)
                    }} />

                    <form.Field name="guests" children={(field) => {
                        return (
                            <>
                                <label htmlFor="guests">Nº acompanhantes (opcional)</label>
                                <select name="guests-number" id="guests-number" defaultValue={0} onChange={(e) => {
                                    field.handleChange(Number(e.target.value))
                                    setGuests(Number(e.target.value))
                                }}>
                                    <option value={0} disabled>Escolhe o número de acompanhantes</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                </select>
                            </>)
                    }} />
                    <div id="guests" className={styles.guests}>
                        {Array.from({ length: guests }).map((_, index) => (
                            <GuestForm key={index} index={index} form={form} />
                        ))}
                    </div>
                    <button className={styles.confirmButton} type="submit">Confirma</button>
                </form>
            </div>
        </section>
    )
}

export default Confirmation