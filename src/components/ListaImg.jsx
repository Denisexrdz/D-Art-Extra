'use client';

import './Css/ListaImg.css'

import React, { useState, useEffect } from "react";

import { db } from '@/firebase/firebase-config'
import app from '@/firebase/firebase-config'
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const ListaImg = () => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const getListaImg = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'creaciones'))
        const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setLista(docs);
      } catch (error) {
        console.log(error);
      }
    }
    getListaImg();
  }, []);

  return (
    <div>
      <p className='titulo'>Creaciones</p>
      <table className='tablero' border="1">
        <thead>
          <tr>

          </tr>
        </thead>
        <tbody>
          {lista.map((item) => (
            <tr key={item.id}>
              <tr><p className='F'>Titulo:</p> {item.titulo}</tr>
              <tr><p className='F'>Descripcion:</p> {item.descCrea}</tr>
              <tr>
                <img
                  style={{ maxWidth: '100%', height: 'auto' }}
                  src={item.imagen}
                  alt={item.titulo}
                />
              </tr>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaImg;
