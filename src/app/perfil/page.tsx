'use client'

import '@/Css/Perfil.css'

import React, {useState, useEffect} from 'react';
import { getFirestore, collection, addDoc, getDocs, DocumentData } from "firebase/firestore";
import { db } from '@/firebase/firebase-config';
//componentes
import Side from '@/components/Side'

export default function Perfil(){
    return(
        <><Side />
        <table>
            <thead>
                <h1>
                    Perfil
                </h1>
                
            </thead>
            <tbody>
                
            </tbody>
        </table></>
    )
};