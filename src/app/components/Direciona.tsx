import { useRouter } from 'next/navigation'
import React from 'react'

export default function Direciona({props}: any) {

   const router = useRouter()
  return (
    <>
      <div onClick={() => router.push(props.destino)} >
        {props.children}
      </div>
    </>
  )
}
