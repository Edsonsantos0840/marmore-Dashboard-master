import React from 'react'

export default function Botao(props: any) {

  return <button className=' px-8 py-0 text-white rounded-md  hover:scale-110 bg-[var(--corPrincipal)] hover:text-red-700 hover:bg-white hover:border-2 hover:border-red-800   text-sm w-full h-8 shadow-xl font-sans' onClick={props.func}  >{props.texto} </button>
  
}
