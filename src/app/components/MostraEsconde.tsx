"use client";
import React, { useRef } from "react";
import Link from "next/link";

export default function MostraEsconde() {
  const fecha: React.MutableRefObject<any> = useRef();

  function fechar(): void {
    fecha.current.style.display = "none";
  }
  function mostrar(): void {
    fecha.current.style.display = "flex";
  }

  return (
    <>
      <h3
        className=" text-white text-2xl hover:scale-110 hover:text-red-700 hover:bg-white p-2 cursor-pointer"
        onMouseOver={mostrar}
      >
        Serviços{" "}
      </h3>
      <div
        className="
           flex-col items-center hidden gap-1  
          p-2  bg-[#00000060] shadow-2xl 
          w-36 text-white absolute left-0 
          top-12  cursor-pointer rounded-b-lg font-semibold "
        ref={fecha}
        onMouseLeave={fechar}
      >
        <Link
          href={"/banheiros"}
          className="hover:scale-110 hover:border-b-2 border-white drop-shadow-md	"
        >
          Banheiros
        </Link>
        <Link
          href={"/cozinhas"}
          className="hover:scale-110 hover:border-b-2 border-white drop-shadow-md	"
        >
          Cozinhas
        </Link>
        <Link
          href={"/escadas"}
          className="hover:scale-110 hover:border-b-2 border-white drop-shadow-md	"
        >
          Escadas
        </Link>
        <Link
          href={"/exteriores"}
          className="hover:scale-110 hover:border-b-2 border-white drop-shadow-md	"
        >
          Exteriores
        </Link>
      </div>
    </>
  );
}
