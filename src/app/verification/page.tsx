'use client'

import '@/Css/Verification.css'
import { fredoka } from '@/fuentes/fonts';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import {auth} from '@/firebase/firebase-config';
import OtpInput from 'react-otp-input';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [otp, setOtp] = useState('');

  return (
    <div className='Verific'>
      <div className='Verificf'>
        <div className='Verification'>
          <h1 className='Title'>¡Antes de comenzar!</h1>
          <h2 className='Subtitle'>Verifica tu correo electronico</h2>
          <h3 className='Text'>Se ha enviado un codigo de confirmaciona  su correo electronico</h3>
          <div className='InputCode'>
          <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span></span>}
      renderInput={(props) => <input {...props} className='InputCodeinput'/>}
    />
          </div>    
          <div className='Reenviardiv'>
            <p>
              ¿No reciviste nada?, <b><u className='Reenviar'>Reenviar código </u></b>
            </p>
          </div>  
        </div>
        <div className='VerificarSend' onClick={()=> console.log(otp)}>
          <p>
            Verificar
          </p>
        </div>
      </div>
    </div>
  );
}
