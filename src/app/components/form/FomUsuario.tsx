'use client'
import React, { SyntheticEvent, useState } from 'react'
import Input from './Input'
import UseHttp from '../../hooks/UseHttp'
import { useRouter } from 'next/navigation'

export default function FormUsuario({props}: any) {
  const url = 'http://localhost:3000/api/users'
  const tipo = "usuario"
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  const {setUser} = UseHttp(url)
  const router = useRouter()

  function handleSubmit(e: SyntheticEvent){
    e.preventDefault()
    const user = {name, email, password, tipo}
    setUser(user)
    router.push('/login')
  }

  return (
    <form  onSubmit={handleSubmit} className='flex flex-col justify-center items-center w-2/4 p-5 m-auto shadow-lg rounded-md' >
          <Input 
            texto='Nome'
            type='text' 
            placeholder='Digite seu Nome'
            value={name}
            Change={(e: any) => setName(e.target.value) }
          />
          <Input 
            texto='E-mail'
            type='email' 
            placeholder='Digite seu E-mail'
            value={email}
            Change={(e: any) => setEmail(e.target.value) }
          />
          <Input 
            texto='Senha'
            type='password' 
            placeholder='Digite seu Senha'
            value={password}
            Change={(e: any) => setPassword(e.target.value) }
          />
          <Input 
            texto='Confirmar Senha'
            type='password' 
            placeholder='Confirme a Senha'
            value={confirmPass}
            Change={(e: any) => setConfirmPass(e.target.value) }
          />

          <Input 
            type='submit' 
            value='Enviar'
          />
    </form>
  )
}
