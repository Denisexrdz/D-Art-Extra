'use client'

import '@/Css/Feed.css'

import React, {useState, useEffect} from 'react';
import { getFirestore, collection, addDoc, getDocs, DocumentData } from "firebase/firestore";
import { db } from '@/firebase/firebase-config';
//componentes
import Side from '@/components/Side'


export default function Feed() {

    const [comisiones, setComisiones] = useState<DocumentData[]>([]);
    const [newComision, setNewComision] = useState({ descComision: '', precioComision: '' });

    // Obtener comisiones al cargar la página
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
        try{
      // Agrega la nueva comisión a Firestore
      await addDoc(collection(db, 'comisiones'), {
        descComision: newComision.descComision.trim(),
        precioComision: newComision.precioComision.trim()
      });
  
      // Limpia el formulario después de agregar la comisión
      setNewComision({ descComision: '', precioComision: '' });
      window.location.reload();
    } catch{
        console.error("Error al agregar comisión:", Error);
    }
    } else {
      // Muestra un mensaje de advertencia al usuario
      alert('Por favor, completa ambos campos antes de agregar una comisión');
      // Puedes personalizar el mensaje según tus necesidades
    }
  };

  return (
    <>
      <div className='Main'>
        <Side />
        <table>
          <thead>
            <tr>
              <th>
                
                  <h1>Feed</h1>
                
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className='haztuComision'>
                <form onSubmit={addComision}>
                  <input className='desc-comision' 
                    name="desc-Comision"
                    value={newComision.descComision}
                    onChange={(e) => setNewComision({ ...newComision, descComision: e.target.value })}
                    type='text' placeholder='Haz tu comisión!' required
                  />
                  <input className='precio-comision'
                    name="prec-Comision"
                    value={newComision.precioComision}
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      if (/^\d+$/.test(inputValue) && parseInt(inputValue) >= 0) {
                        setNewComision({ ...newComision, precioComision: inputValue });
                      }
                    }}
                     type='number' placeholder='$presupuesto$' required
                  />
                  <button className='border items-center text-black w-full' type='submit'>listo!</button>
                </form>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <ul>
                  {comisiones.map((comision, id) => (
                    <li key={id} className="my-4 w-full flex justify-between ">
                      <div className="p-10">
                        <span className="p-4">{comision.descComision}</span>
                        <span className="p-4">{"$"+comision.precioComision}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}