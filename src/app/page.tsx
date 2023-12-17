'use client'

import Image from 'next/image'
import samuraiCat from '../Css/imagenes/SamuraiCat.jpeg';
import Diana from '../Css/imagenes/Diana.png';
import Biocatchers from '../Css/imagenes/Biocatchers.jpeg';
import Jack from '../Css/imagenes/Jack.jpeg';
import Williampx from '../Css/imagenes/Williampx.png';
import AHM from '../Css/imagenes/AtomHeartMother.jpeg';
import GalloTenis from '../Css/imagenes/GalloTenis.jpeg';
import  Chayo from '../Css/imagenes/Chayo.png';

import '../Css/Landing.css';
import Navbar from '@/components/Navbar'




const images = [
  {src: Williampx, alt: 'Williampx'},
  {src: AHM, alt: 'AtomHeartMother'},
  {src: GalloTenis, alt: 'GalloTenis'},
  {src: Chayo, alt: 'Chayo'}
];

const images2 = [
  {src: samuraiCat, alt: 'SamuraiCat'},
  {src: Diana, alt: 'Diana'},
  {src: Biocatchers, alt: 'Biocatchers'},
  {src: Jack, alt: 'Jack'},

];



const frases = [
  "Descubre y crea arte en D-Art", 
  "Hacer pedidos nunca fue tan facil como en D-Art", 
  "Comisiones a un click de distancia", "Descubre nuevos artistas"
]

const frases2 = [
  "Conoce a clientes potenciales", "Publica tu portafolio gratis", 
  "Haz negocios facilmente", "D-Art es la solución "
]
export default function Home() {
  return (
    <main >
      <Navbar></Navbar>
      <section className="Landing1">
        <div>
          <a href=""></a>
        </div>
        <div className="Bienvenida">
            <div>
                <div className='BienvenidaTitle'>
                    <b>Descubre y crea arte</b>
                    <br />
                    <b className="en">en</b>
                    <svg width="408" height="77" viewBox="0 0 408 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_878_1157)">
                        <path d="M33.7837 35.7194C33.7837 31.9216 33.6163 29.3201 33.2812 27.9148C32.9462 26.4716 32.3319 25.75 31.4385 25.75C30.88 25.75 30.3775 25.9399 29.9308 26.3196C30.0052 27.0033 30.1168 27.9148 30.2658 29.054C30.4148 30.1934 30.4891 32.6242 30.4891 36.346V40.049C30.4891 42.6317 30.4334 44.5117 30.3216 45.689C30.2099 46.8664 30.1168 47.8729 30.0424 48.7084C30.0052 49.1641 29.968 49.6199 29.9308 50.0757C30.3775 50.4554 30.88 50.6453 31.4385 50.6453C32.3319 50.6453 32.9462 49.9427 33.2812 48.5375C33.6163 47.0943 33.7837 44.4737 33.7837 40.6758V35.7194ZM12.9551 75.0849C8.82286 75.0849 5.62132 73.9646 3.35046 71.7237C1.11682 69.483 0 66.1028 0 61.5832V10.3114C0 7.42499 2.82927 4.99437 8.48782 3.01938C14.1835 1.00655 20.5309 0 27.5297 0C39.8518 0 49.475 3.03838 56.3994 9.11502C63.8449 15.6474 67.5675 25.3892 67.5675 38.3401C67.5675 49.9996 63.9564 59.0387 56.7344 65.4572C49.5496 71.8757 39.6657 75.0849 27.0829 75.0849H12.9551Z" fill="#390099"/>
                        <path d="M135.303 40.277C135.303 42.9734 134.912 45.4041 134.13 47.569C133.385 49.6958 132.212 51.8986 130.612 54.1772H100.793C97.703 49.8476 96.158 45.2142 96.158 40.277C96.158 37.5423 96.5489 35.0737 97.3307 32.8709C98.1126 30.6302 99.2664 28.3514 100.793 26.0348H130.612C132.249 28.4654 133.441 30.7631 134.186 32.9279C134.931 35.0927 135.303 37.5423 135.303 40.277Z" fill="#9E0059"/>
                        <path d="M276.133 34.5231C276.283 34.637 276.711 34.694 277.418 34.694C278.124 34.694 278.665 34.4092 279.037 33.8395C279.409 33.2698 279.595 32.3392 279.595 31.0481V28.9972C279.595 27.6299 279.428 26.6614 279.093 26.0919C278.795 25.484 278.274 25.1802 277.531 25.1802C276.823 25.1802 276.338 25.2562 276.078 25.4082C276.116 25.5981 276.133 25.9209 276.133 26.3767V34.5231ZM304.948 47.512L314.608 57.5955C313.937 63.5203 312.096 68.0776 309.081 71.2679C306.102 74.4583 301.97 76.0533 296.683 76.0533C292.699 76.0533 289.238 75.0849 286.296 73.148C282.537 70.7172 279.725 66.8434 277.865 61.5263L275.855 55.9435C274.292 55.9054 272.317 55.6964 269.935 55.3167C269.638 55.6205 269.488 56.0383 269.488 56.5701C269.488 57.5955 270.996 58.2031 274.012 58.3931L277.195 66.5965V71.4389C272.913 74.5152 267.422 76.0533 260.722 76.0533C255.919 76.0533 252.086 75.047 249.219 73.034C246.352 71.0212 244.919 68.0967 244.919 64.2609V10.1406C244.919 8.46939 246.426 6.85535 249.441 5.29817C252.458 3.703 256.404 2.43076 261.28 1.48119C266.157 0.493779 271.032 0 275.911 0C287.078 0 295.808 2.33577 302.1 7.0072C308.726 11.9066 312.04 18.7998 312.04 27.6868C312.04 32.776 310.625 37.1436 307.796 40.7897C305.004 44.3976 301.467 46.9043 297.185 48.3096C297.185 49.5248 297.893 50.1325 299.306 50.1325C300.76 50.1325 302.641 49.2591 304.948 47.512Z" fill="#FF5400"/>
                        <path d="M189.177 8.14862L230.322 80.8533H190.535V55.682H187.819V80.8522H148.032L189.177 8.14862Z" fill="#FF0054"/>
                        <path d="M390.327 30.649V70.6982C388.615 72.2174 386.326 73.4896 383.459 74.515C380.594 75.5406 377.113 76.0532 373.017 76.0532C368.922 76.0532 365.442 75.1227 362.575 73.2617C359.337 71.2488 357.717 68.4004 357.717 64.7165V28.0285H344.706C342.025 24.1167 340.685 19.844 340.685 15.2106C340.685 12.0583 341.17 9.32388 342.137 7.00711C343.142 4.65247 344.371 2.82946 345.823 1.5381H403.562C404.642 3.24711 405.535 5.31708 406.242 7.74771C406.949 10.1783 407.304 12.5901 407.304 14.9827C407.304 19.4643 406.335 22.7684 404.4 24.8953C402.465 26.9841 399.857 28.0285 396.581 28.0285H380.22C380.109 28.2945 380.053 28.5793 380.053 28.8831C380.053 29.5666 380.444 30.0226 381.225 30.2503C382.044 30.5161 383.795 30.649 386.474 30.649H390.327Z" fill="#FFBD00"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_878_1157">
                        <rect width="407.429" height="76.0533" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>

                </div>             
                <p>
                        El lugar donde los artistas encuentran su inspiración y los fanáticos del arte transforman sus ideas en realidad.
                </p>
            </div>
            <div className='fotos'>
                    {frases.map((frase, index) => (
                        <div key={index} className={`foto${index + 1}`}>
                            <Image src={images[index].src} alt={images[index].alt} />
                            <p>{frase}</p>
                        </div>
                    ))}
            </div>
                               
        </div>
        <div className='fotos2'>
                    {frases2.map((frase, index) => (
                        <div key={index} className={`fotolol${index + 1}`} >
                            <Image src={images2[index].src} alt={images2[index].alt} />
                            <p>{frase}</p>
                        </div>
                    ))}
        </div>
    </section>
    </main>
  )
}

