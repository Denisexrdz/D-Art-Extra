'use client'

import '@/Css/Perfil.css'

import React, {useState, useEffect} from 'react';
import { getFirestore, collection, addDoc, getDocs, DocumentData } from "firebase/firestore";
import { db } from '@/firebase/firebase-config';
//componentes
import Side from '@/components/Side'
import BtnCrea from '@/components/BtnCrea';

export default function Perfil(){
    return(
        <><Side />
        <table>
            <thead>
                <th>
                <h1>
                    Perfil
                </h1>
                </th>
            </thead>
            <tbody>
                <BtnCrea />
            </tbody>
        </table></>
    )
};