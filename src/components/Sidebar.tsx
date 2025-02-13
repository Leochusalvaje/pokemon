import React from 'react'
import Image from 'next/image'
import { IoLogoPython } from 'react-icons/io'
import { SideBarMenu } from './SideBarMenu'
import { IoBrowsersOutline, IoCalculator, IoFootball } from 'react-icons/io5'

const menuItems=[{
path:'/dashboard/main',
icon:<IoBrowsersOutline size={40}/>,
title:'Dashboard',
subtitle:'Visualizacion'
},
{
    path:'/dashboard/pokemons',
icon:<IoFootball size={40}/>,
title:'Pokemons',
subtitle:'Generación Estática'
}



]


export const Sidebar = () => {
  return (
    <div id="menu"
    style={{width:'400px'}}
    className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">
    <div id="logo" className="my-4 px-6">
     <h1 className=" flex items-center text-lg md:text-2xl font-bold text-white">
        <IoLogoPython className='m-2' />
        <span>Dash</span><span className="text-blue-500">8</span>.</h1>
     <p className="text-slate-500 text-sm">Manage your actions and activities</p>
    </div>
    <div id="profile" className="px-6 py-10">
     <p className="text-slate-500">Hola archidemonio,</p>
     <a href="#" className="inline-flex space-x-2 items-center">
         <span>
             <Image  width={50} height={50} className="rounded-full w-8 h-8" src="/images/elmal.jpg" alt="User Avatar"/>
         </span>
         <span className="text-sm md:text-base font-bold">
             Evangelion Primus
         </span>
         </a>
    </div>


    <div id="nav" className="w-full px-6">
{menuItems.map(item=>(
    <SideBarMenu key={item.path}{...item} />


))}



  
     
    </div>
 </div>
  )
}
