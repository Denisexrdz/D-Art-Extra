'use client'

import '@/Css/Feed.css'

import React, { useState, useEffect } from 'react';
import { getFirestore, collection, addDoc, getDocs, DocumentData } from "firebase/firestore";
import { db } from '@/firebase/firebase-config';

import Side from '@/components/Side'
import Form from '@/components/Form'
import BtnCrea from '@/components/BtnCrea'
import ListaImg from '@/components/ListaImg';


export default function Feed() {
    const [comisiones, setComisiones] = useState<DocumentData[]>([]);
    const [newComision, setNewComision] = useState({ descComision: '', precioComision: '' });
    const [showComisionesFeed, setShowComisionesFeed] = useState(true);

    useEffect(() => {
        const obtenerComisiones = async () => {
            try {
                const comisionesSnapshot = await getDocs(collection(db, 'comisiones'));
                const comisionesData = comisionesSnapshot.docs.map(doc => doc.data());
                setComisiones(comisionesData);
            } catch (error) {
                console.error("Error al obtener comisiones:", error);
            }
        };

        obtenerComisiones();
    }, []);

    const addComision = async (e: React.FormEvent) => {
        e.preventDefault();

        if (newComision.descComision.trim() !== '' && newComision.precioComision.trim() !== '') {
            try {
                await addDoc(collection(db, 'comisiones'), {
                    descComision: newComision.descComision.trim(),
                    precioComision: newComision.precioComision.trim()
                });
                setNewComision({ descComision: '', precioComision: '' });
                window.location.reload();
            } catch {
                console.error("Error al agregar comisión:", Error);
            }
        } else {
            alert('Por favor, completa ambos campos antes de agregar una comisión');
        }
    };

    return (
        <>
            <div className='Main'>
                <Side />
                <table>
                    <thead>
                        <th>
                            <h1>Feed</h1>
                            
                        </th>
                    </thead>
                    <tbody>
                        <BtnCrea />
                        <tr>
                            <td>
                                <div className='cambiarFeed'>
                                    <button onClick={() => setShowComisionesFeed((prevShowComisionesFeed) => !prevShowComisionesFeed)}>
                                        Cambiar a {showComisionesFeed ? 'Creaciones' : 'Comisiones'}
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='haztuComision'>
                                    <form onSubmit={addComision}>
                                        <table>
                                            <tr>
                                                <input
                                                    className='desc-comision'
                                                    name="desc-Comision"
                                                    value={newComision.descComision}
                                                    onChange={(e) => setNewComision({ ...newComision, descComision: e.target.value })}
                                                    type='text' placeholder='Haz tu comisión!' required
                                                />
                                            </tr>
                                            <tr>
                                                <input
                                                    className='precio-comision'
                                                    name="prec-Comision"
                                                    value={newComision.precioComision}
                                                    onChange={(e) => {
                                                        const inputValue = e.target.value;
                                                        const parsedValue = parseInt(inputValue, 10);

                                                        if (/^\d+$/.test(inputValue) && parsedValue >= 1 && parsedValue <= 99999) {
                                                            setNewComision({ ...newComision, precioComision: inputValue });
                                                        }
                                                    }}
                                                    type='number' placeholder='$presupuesto$' required
                                                />
                                            </tr>
                                            <tr>
                                                <button className='btnHacerComision' type='submit'>listo!</button>
                                            </tr>
                                        </table>
                                    </form>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='titulo'>Comisiones</p>
                                {showComisionesFeed ? (
                                    <div className='ComisionesUp'>
                                        <ul>
                                            {comisiones.map((comision, id) => (
                                                <li key={id} className="my-4 w-full flex justify-between ">
                                                    <div className="comisionUp">
                                                        <span className="descComisionUp"><p>{comision.descComision}</p></span>
                                                        <span className="precComisionUp"><p>$ {comision.precioComision}</p></span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : (
                                    //Feed de imágenes
                                    <div className='CreacionesFeed'>
                                        <ListaImg />

                                    </div>
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
