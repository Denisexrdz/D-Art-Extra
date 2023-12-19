'use client';

import './Css/Form.css';
import React, { useState } from 'react';
import { db } from '@/firebase/firebase-config';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

const storage = getStorage();

const Form = () => {
  const [urlImDesc, setUrlImDesc] = useState('');
  
  const guardarInfo = async (e) => {
    e.preventDefault();
    const titulo = e.target.titulo.value;
    const descCrea = e.target.descCrea.value;
    const precio = e.target.precio.value;

    try {
      const archivoI = e.target.file.files[0];
      const refArchivo = ref(storage, `documentos/${archivoI.name}`);
      await uploadBytes(refArchivo, archivoI);
      const downloadUrl = await getDownloadURL(refArchivo);
      setUrlImDesc(downloadUrl);

      await addDoc(collection(db, 'creaciones'), {
        titulo: titulo,
        descCrea: descCrea,
        precio: precio,
        imagen: downloadUrl,
        
      });

      e.target.titulo.value = '';
      e.target.descCrea.value = '';
      e.target.precio.value='';
      e.target.file.value = '';
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="formAgregarCreacion">
      <h3 className="titulo">Comparte tu creación</h3>
      <form onSubmit={guardarInfo}>
        <table>
          <tbody>
            <tr>
              <label>Titulo</label>
              <input type="text" required placeholder="Ponle un titulo a tu creacion" id="titulo" className="InputB"
              minLength={10} maxLength={100} />
            </tr>
            <tr>
              <label>Descripción de creación</label>
              <input type="text" required placeholder="Describe tu obra" id="descCrea" className="InputB" 
              minLength={10} maxLength={100}/>
            </tr>
            <tr>
              <label>Precio de tu Creacion</label>
              <input
               type="number"
                required placeholder="$$"
                id="precio" 
                className="InputB" 
                min="1"
                max="999999"/>
            </tr>
            <tr>
              <label>Agregar creación</label>
              <input type="file" required id="file" placeholder="Agregar Imagen" />
            </tr>
            <tr>
              <button className='Comparte' type="submit">Comparte</button>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Form;
