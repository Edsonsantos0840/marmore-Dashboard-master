'use client'
import { signOut } from "next-auth/react";

export default function BtnLogout() {

  return (
    <>
      <button onClick={() => signOut()} className="hover:scale-110 hover:text-red-700 hover:bg-white p-2 m-0"  >
       Sair
      </button>
    </>
  )
}