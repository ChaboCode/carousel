import Image from "next/image";
import { useState } from "react";

export default function Pics() {
    const [pic, setPic] = useState(1)
    return (

        <div className="flex w-full gap-4 items-center justify-center h-[100vh]">
            <button onClick={() => setPic(0)}><Image className={`transition object-cover rounded h-[300px] opacity-${pic === 0 ? '100' : '60'} hover:cursor-pointer hover:h-[500px]`} src={'/1.jpg'} alt={""} width={400} height={300} /></button>
            <button onClick={() => setPic(1)}><Image className={`transition object-cover rounded h-[300px] opacity-${pic === 1 ? '100' : '60'} hover:cursor-pointer`} src={'/2.jpeg'} alt={""} width={400} height={300} /></button>
            <button onClick={() => setPic(2)}><Image className={`transition object-cover rounded h-[300px] opacity-${pic === 2 ? '100' : '60'} hover:cursor-pointer`} src={'/3.jpeg'} alt={""} width={400} height={300} /></button>
        </div>
    )
}