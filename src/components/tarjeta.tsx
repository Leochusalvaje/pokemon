import {PokemonsResponse,Result} from '@/pokemons/interfaces/pokemons-responses'
import Image from 'next/image'
import Link from 'next/link'
import {FC} from 'react'
import React from 'react'
import { IoHeartCircleOutline, IoHeartHalfOutline, IoHeartOutline } from 'react-icons/io5'

interface TarjetaProps {
  name: string;
  urlImage: string;
  urlPok: string;
}


export const Tarjeta:FC<TarjetaProps> = ({name,urlImage,urlPok}) => {
  return (

<div className="relative flex flex-col justify-center overflow-hidden bg-gray-50 py-12 sm:py-8">
  <div className="max-w-screen-md mx-auto">
    <div className="grid grid-cols-1 gap-4">
      <div className="group pb-24 relative overflow-hidden">
        <div className="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute bg-gradient-to-b from-transparent to-orange-600 z-10"></div>
        <Image  alt={name} width={50} height={50} src={urlImage} className="transition-all group-hover:scale-125 duration-700 mr-4 h-60 w-auto" />
        <div className="bg-orange-600 absolute z-10 bottom-0 left-0 w-full h-24 flex flex-col justify-center items-center">
          <div className="z-20 absolute -top-5 w-full flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="group-hover:bg-white group-hover:text-orange-600 group-hover:rotate-180 w-10 h-10 bg-black text-white p-2 rounded-full transition-all">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
          </div>
          <div className="group-hover:hidden transition-all duration-1000 w-4 absolute overflow-hidden inline-block right-0 -top-6">
            <div className="h-6  bg-orange-900 -rotate-45 transform origin-bottom-right"></div>
          </div>
          <h2 className="font-bold capitalize">{name}</h2>
          <div className="flex items-center space-x-2">
  <IoHeartOutline className="text-white " />
  <p className="text-white text-sm font-semibold">Es favorito</p>
</div>

          <Link
  href={urlPok}
  prefetch={true} 
  className="bg-zinc-800 hover:bg-orange-700 text-white font-semibold py-1 px-3 rounded-full text-sm transition-all duration-300"
>
  Más información
</Link>
        </div>

      </div>
    </div>
  </div>
</div>
)}

