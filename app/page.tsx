'use client'
import Image from "next/image";

import { useEffect, useState } from "react";


export default function Home() {
  const [el, setElement] = useState(0)

  const [pic, setPic] = useState(0)
  const [translate, setTranslate] = useState('0')

  const [translateMenu, setTranslateMenu] = useState('0px')

  const [footer, setFooter] = useState(false)

  useEffect(() => {
    setTranslateMenu(el * 60 + 'px')
  }, [el])

  useEffect(() => {
    setTranslate(((-332 * (pic - 3))) - 150 + 'px')
  }, [pic])

  useEffect(() => {
    console.log(translateMenu)
  }, [translateMenu])

  function Pic({ src, enabled, setPic }: { src: string; enabled?: boolean; setPic: () => void }) {
    return <Image src={src} alt={''} onClick={() => setPic()} className={`min-w-[300px] rounded-xl object-cover ${enabled ? 'opacity-100 shadow-xl' : 'opacity-50 scale-80'} hover:opacity-100 transition duration-300 hover:cursor-pointer `} width={300} />
  }

  const pics = [
    'https://rotoplas.kaerdos.dev/files/2507895430.jpeg',
    'https://rotoplas.kaerdos.dev/files/2755309932.jpg',
    'https://rotoplas.kaerdos.dev/files/3779635697.gif',
    'https://rotoplas.kaerdos.dev/files/22258913.jpg',
    'https://rotoplas.kaerdos.dev/files/3999752392.jpeg',
    'https://rotoplas.kaerdos.dev/files/3246183970.jpeg',
  ]

  return (
    <div className="flex flex-col gap-6">
      <header className="border border-red-500 w-full h-[60px] rounded flex items-center justify-center group">
        <span className="group-hover:scale-105 transition group-hover:-translate-y-1">Super header</span>
      </header>
      <div className="flex items-stretch gap-6">
        <nav className={`relative transition-all border border-amber-500 w-[300px] rounded hover:shadow-md shadow-amber-100 overflow-clip hover:scale-105 duration-200 ease-in-out`}>
          <div className={`absolute w-[300px] h-[60px] bg-amber-100  -z-30 transition translate-menu`} style={{ '--translate-menu': translateMenu } as React.CSSProperties}></div>
          <ul className="grid grid-rows-1">
            <li className={`h-[60px] p-4 hover:cursor-pointer hover:text-amber-900 transition duration-200`} onClick={() => setElement(0)} onMouseEnter={() => setElement(0)}>Elemento 1</li>
            <li className={`h-[60px] p-4 hover:cursor-pointer hover:text-amber-900 transition duration-200`} onClick={() => setElement(1)} onMouseEnter={() => setElement(1)}>Elemento 2</li>
            <li className={`h-[60px] p-4 hover:cursor-pointer hover:text-amber-900 transition duration-200`} onClick={() => setElement(2)} onMouseEnter={() => setElement(2)}>Elemento 3</li>
            <li className={`h-[60px] p-4 hover:cursor-pointer hover:text-amber-900 transition duration-200`} onClick={() => setElement(3)} onMouseEnter={() => setElement(3)}>Elemento 4</li>
            <li className={`h-[60px] p-4 hover:cursor-pointer hover:text-amber-900 transition duration-200`} onClick={() => setElement(4)} onMouseEnter={() => setElement(4)}>Elemento 5</li>
          </ul>
        </nav>
        <main className="w-[800px] rounded flex flex-col items-center overflow-hidden mx-auto inset-shadow-2xs inset-shadow-white gap-6">
          <div className={`flex h-[300px] gap-[32px] m-[30px] ${translate} transition duration-300 translatable`} style={{ '--translate': translate } as React.CSSProperties}>
            {pics.map((src, index) =>
              <Pic key={'pic' + index} src={src} enabled={pic === index} setPic={() => setPic(index)} />
            )}
          </div>
          <a href={pics[pic]} target="_blank" className="mb-6 p-4 rounded-xl bg-blue-600 text-white transition hover:scale-105 hover:-translate-y-2 hover:shadow-blue-300 shadow hover:shadow-lg">Abrir imagen</a>
        </main>
      </div>
      <footer className="relative border border-lime-500 rounded h-[120px] flex items-center justify-center group overflow-clip">
        <div className="absolute -translate-y-5 group-hover:translate-y-0 top-0  transition bg-amber-500 w-[20px] h-[20px] flex items-center justify-center rounded-b text-white hover:cursor-pointer shadow-none group-hover:shadow-amber-300 group-hover:shadow hover:shadow-md right-[30px]" onClick={() => setFooter(!footer)}>?</div>
        <span className={`${footer ? 'opacity-100' : 'opacity-0'} transition`}>a poco si jala</span>
      </footer>
    </div>
  );
}