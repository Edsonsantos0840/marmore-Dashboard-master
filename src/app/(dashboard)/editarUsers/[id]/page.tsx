"use client";
import React, {useEffect, useState } from "react";
import UseConvert from '../../../hooks/UseConvert'
import Input from "../../../components/form/Input";
import ConvertImage from "../../../components/ConvertImage";
import { useRouter } from "next/navigation";

export default function EditarUsers({ params }: any) {
  const url: string =  `http://localhost:3000/api/users/${params.id}`
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [fone, setFone] = useState<string>("");
  const [tipo, setTipo] = useState<string>("");
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<boolean>(false);

  const route = useRouter();
  
  const {userImage, setUserImage, convertToBase64 } = UseConvert()

  useEffect(() => {
    async function getUser(): Promise<void>{
      setLoading(true)
      try {
        const res = await fetch(url)
        const json = await res.json()
        setUser(json)
      } catch (error) {
        setErr(error)
        console.log(error)
      }
      setLoading(false)
    }
    getUser()
  },[url] )

 async function handleSubmit(e: React.SyntheticEvent): Promise<void> {
    e.preventDefault();
    const usuario: object = {
      name,
      email,
      fone,
      tipo,
      userImage,
    };
   
    setLoading(true)
    try {
        await fetch(url, {
        method: "PUT",
        headers: {"Content-Type":"application/json" },
        body: JSON.stringify(usuario)
      })
  
      alert('Usuário editado com sucesso')
      route.push("/usuarios")
      
    } catch (error) {
      setErr(error)
      console.log(error)
    }
    setLoading(false)
  }
   useEffect(() => {
    setName(user?.name)
    setEmail(user?.email)
    setFone(user?.fone)
    setTipo(user?.tipo)
   },[user] )

  return (
    <div className="w-full md:absolute md:top-0 md:left-[19%]  md:w-10/12 m-auto pr-1 p-1" >
       <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center w-3/4 p-8 shadow-lg rounded-md "
    >
      {
        err && <p>{err}</p>
      }
      <h1 className="text-3xl text-center mb-8 font-bold ">
        Cadastro de Usuário
      </h1>
      <Input
        texto="Nome"
        type="text"
        placeholder="Digite seu Nome"
        value={name}
        Change={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <Input
        texto="E-mail"
        type="email"
        placeholder="Digite seu E-mail"
        value={email}
        Change={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />
      <Input
        texto="Telefone"
        type="tel"
        placeholder="Digite seu Telefone"
        value={fone}
        Change={(e: React.ChangeEvent<HTMLInputElement>) => setFone(e.target.value)}
      />
      <div className=" flex justify-between w-full gap-2 ml-4">
        <label className=" text-center py-2 w-full rounded-md border border-[#4e1d1d87] my-2">
          <select
            id="tipo"
            value={tipo}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTipo(e.target.value)}
          >
            <option value="">Escolha o tipo</option>
            <option value="adimin">Administrador</option>
            <option value="colaborador">Colaborador</option>
          </select>
        </label>
      </div>
      <ConvertImage func={convertToBase64} img={userImage} />
  
      {
        loading ? 
        <Input type="submit" value="Aguarde" disabled/> :
        <button>Enviar</button>
       }
    </form>
    </div>
  )
}
