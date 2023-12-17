'use client'


import '@/Css/Login.css'
//import { fredoka } from '@/fuentes/fonts';
import Link from 'next/link';
import Image from 'next/image';
//import Navbar from '@/components/Navbar';
import { useState } from 'react';

//Todo lo de firebase
import { signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth, db} from '@/firebase/firebase-config'
import { collection, addDoc, getFirestore } from "firebase/firestore"; 
import { doc, setDoc } from "firebase/firestore"; 


import Mooh from '@/Css/imagenes/mOOH.jpeg'
import Elizabeth2 from '@/Css/imagenes/Elizabeth2.jpeg'
import Linkz from '@/Css/imagenes/Link.png'
import { Pridi } from 'next/font/google';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const validation = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
    
    if (!email || !password) {
      alert('Datos erróneos: Los campos no pueden estar vacíos');
      return false;
    }
    if (!emailPattern.test(email)) {
      alert('Datos erróneos: El correo electrónico debe contener un @');
      return false;
    }
  
    if (!passwordPattern.test(password)) {
      alert('Datos erróneos: La contraseña debe tener al menos 8 caracteres, incluyendo números, letras minúsculas y al menos una letra mayúscula');
      return false;
    }
  
    if (/<.*?>.*?<\/.*?>/i.test(email) || /<.*?>.*?<\/.*?>/i.test(password) ){
      alert('Datos erróneos: No se permiten etiquetas de html unu');
      return false;
    }
  
    return true;
  }

  const handleSignIn = async () => {
    if (validation()){
      try {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log('¡Signed in!')
          const user= userCredential.user;
          console.log(user)

        }).catch(error =>{
          console.log(error)
          });


        setEmail('');
        setPassword('');

      } catch(e){
          console.error(e)
      }
    }
    
  };
  return (
    <div >
      <div className='Todoi'>
      <div className='imagenesi'>
        <div className='imgg1i'>
          <Image src={Elizabeth2} alt='BocanadaPA' className='img1i'></Image>
        </div>
        
        <div className='imgg2i'>
          <Image src={Linkz} alt='Moshe' className='img2i'></Image>
        </div>
        <div className='imgg3i'>
          <Image src={Mooh} alt='Moshe' className='img3i'></Image>
        </div>
        <div className='TextoImgi'>
        <b>Comisiones</b> <p>A un click de distancia</p>
        </div>
      </div>
      <div className='containeri'>
        <div className='Titlei'>
          <h1 className='TitleModaki'>
            Bienvenido de nuevo a
          </h1>
          <Link href={'../'}>
          <svg width="203" height="38" viewBox="0 0 203 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_755_1189)">
          <path d="M16.8326 17.7971C16.8326 15.9048 16.7492 14.6086 16.5823 13.9085C16.4153 13.1894 16.1093 12.8299 15.6642 12.8299C15.3858 12.8299 15.1355 12.9245 14.9129 13.1137C14.95 13.4543 15.0056 13.9085 15.0799 14.4761C15.1541 15.0438 15.1911 16.2549 15.1911 18.1093V19.9543C15.1911 21.2411 15.1634 22.1778 15.1077 22.7644C15.052 23.351 15.0056 23.8525 14.9685 24.2688C14.95 24.4959 14.9315 24.723 14.9129 24.9501C15.1355 25.1392 15.3858 25.2338 15.6642 25.2338C16.1093 25.2338 16.4153 24.8838 16.5823 24.1837C16.7492 23.4646 16.8326 22.1589 16.8326 20.2666V17.7971ZM6.45486 37.4108C4.39596 37.4108 2.8008 36.8526 1.66936 35.7361C0.556453 34.6197 0 32.9355 0 30.6836V5.13762C0 3.69948 1.40967 2.48843 4.22903 1.5044C7.0669 0.501512 10.2294 0 13.7166 0C19.856 0 24.6508 1.51387 28.1008 4.54153C31.8105 7.79628 33.6653 12.6501 33.6653 19.1028C33.6653 24.9122 31.8661 29.4158 28.2678 32.6138C24.6879 35.8118 19.7633 37.4108 13.494 37.4108H6.45486Z" fill="#390099"/>
          <path d="M67.4144 20.0679C67.4144 21.4113 67.2195 22.6224 66.8299 23.7011C66.4588 24.7608 65.8743 25.8583 65.077 26.9936H50.2197C48.6802 24.8364 47.9105 22.5278 47.9105 20.0679C47.9105 18.7053 48.1052 17.4754 48.4948 16.3778C48.8843 15.2614 49.4592 14.126 50.2197 12.9717H65.077C65.8929 14.1828 66.4867 15.3276 66.8577 16.4062C67.2289 17.4848 67.4144 18.7053 67.4144 20.0679Z" fill="#9E0059"/>
          <path d="M137.583 17.201C137.657 17.2578 137.87 17.2862 138.223 17.2862C138.575 17.2862 138.844 17.1443 139.029 16.8604C139.215 16.5766 139.307 16.1129 139.307 15.4696V14.4478C139.307 13.7665 139.224 13.284 139.057 13.0002C138.909 12.6973 138.649 12.5459 138.279 12.5459C137.926 12.5459 137.685 12.5838 137.555 12.6596C137.574 12.7542 137.583 12.915 137.583 13.1421V17.201ZM151.939 23.6727L156.753 28.6968C156.418 31.6488 155.501 33.9195 153.998 35.509C152.515 37.0986 150.455 37.8933 147.821 37.8933C145.837 37.8933 144.112 37.4108 142.646 36.4457C140.773 35.2346 139.372 33.3045 138.445 30.6553L137.444 27.8737C136.665 27.8547 135.681 27.7506 134.494 27.5614C134.346 27.7127 134.272 27.9209 134.272 28.1859C134.272 28.6968 135.023 28.9995 136.526 29.0942L138.112 33.1815V35.5942C135.978 37.1269 133.242 37.8933 129.904 37.8933C127.511 37.8933 125.601 37.3919 124.172 36.389C122.744 35.3861 122.03 33.9289 122.03 32.0178V5.0525C122.03 4.21985 122.781 3.41566 124.283 2.6398C125.786 1.84501 127.753 1.21112 130.182 0.738C132.612 0.246024 135.041 0 137.472 0C143.036 0 147.385 1.16379 150.52 3.49132C153.822 5.93241 155.473 9.36696 155.473 13.7949C155.473 16.3305 154.768 18.5067 153.358 20.3233C151.967 22.121 150.205 23.3699 148.072 24.0701C148.072 24.6756 148.424 24.9783 149.128 24.9783C149.853 24.9783 150.79 24.5432 151.939 23.6727Z" fill="#FF5400"/>
          <path d="M94.257 4.06006L114.757 40.2849H94.9337V27.7434H93.5803V40.2844H73.7567L94.257 4.06006Z" fill="#FF0054"/>
          <path d="M194.479 15.2708V35.2252C193.626 35.9821 192.486 36.616 191.057 37.1269C189.63 37.6379 187.895 37.8932 185.855 37.8932C183.814 37.8932 182.08 37.4297 180.652 36.5024C179.038 35.4995 178.231 34.0803 178.231 32.2448V13.9651H171.749C170.413 12.0161 169.745 9.88723 169.745 7.57865C169.745 6.00803 169.987 4.6456 170.468 3.49127C170.969 2.31808 171.582 1.40977 172.305 0.766357H201.073C201.611 1.61787 202.057 2.64922 202.408 3.86027C202.761 5.07132 202.938 6.27298 202.938 7.46511C202.938 9.69804 202.455 11.3443 201.491 12.404C200.527 13.4447 199.227 13.9651 197.595 13.9651H189.444C189.388 14.0977 189.36 14.2396 189.36 14.3909C189.36 14.7315 189.555 14.9586 189.944 15.0721C190.352 15.2045 191.225 15.2708 192.56 15.2708H194.479Z" fill="#FFBD00"/>
          </g>
          <defs>
          <clipPath id="clip0_755_1189">
          <rect width="203" height="37.8933" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          </Link>



        </div>
        <div className='CreaTCi'>
        <h2>¿No tienes una cuenta? <Link href={"../register"}>Registrate</Link></h2>
          
        </div>
        <div className='Camposi'>
          <div className='Formi'>
            <div className='Bi'>
            <p>Correo</p>
            <div className='InputBi'>
              <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              type="text" 
              placeholder='Ingresa tu correo electrónico'/>
            </div>
            </div>
            <div className='Bi'>
            <p>Contraseña</p>
            <div className='InputBi'>
              <input 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              type="text" 
              placeholder='Ingresa tu contraseña'/>
            </div>
            </div>
            <div 
            onClick={handleSignIn}
            className='BtnRegistroi'>
              <button className= "Registrarsei">Iniciar Sesion</button>
            </div>
            
          </div>
        </div>

      </div>
      
      </div>
    </div>
  );
}
