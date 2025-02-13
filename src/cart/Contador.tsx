'use client'

import { useState } from "react"

export default function Contador() {
    const [count,setcount]=useState(69)
  return (
<>
<div className="flex">
    <span className="text-9xl"> {count}</span>
    <button onClick={()=>setcount(count+1)} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">+1</button>
    <button onClick={()=>setcount(count-1)} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">-1</button>
</div>

</>
  )
}
