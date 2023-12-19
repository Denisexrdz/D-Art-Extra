'use client'

import '@/Css/Buscar.css'

import React, {useState, useEffect} from 'react';
import { getFirestore, collection, addDoc, getDocs, DocumentData } from "firebase/firestore";
import { db } from '@/firebase/firebase-config';
//componentes
import Side from '@/components/Side'

export default function Buscar(){
    return(
        <Side />
    )
};