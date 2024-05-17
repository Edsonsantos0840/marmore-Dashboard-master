"use client";
import { SyntheticEvent } from "react";
import React, { useState } from "react";
import Input from "./Input";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function FormLogin({ props }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      console.log(result); 
      return;
    }

    router.replace("/");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center w-2/4 p-8 m-auto mt-4 shadow-2xl rounded-md"
    >
      <Input
        texto="E-mail"
        type="email"
        placeholder="Digite seu E-mail"
        value={email}
        Change={(e: any) => setEmail(e.target.value)}
      />
      <Input
        texto="Senha"
        type="password"
        placeholder="Digite seu Senha"
        value={password}
        Change={(e: any) => setPassword(e.target.value)}
      />
      <Input type="submit" value="Login" />

      <p>Login com Google</p>
      <button className="bg-zinc-400 p-2 rounded-md text-white w-full" onClick={() => signIn('google') } >Login com Google</button>

      <p className="text-xs" >Não Possui Cadastro?</p>
      <Link href={"/cadastro"}  className="text-xl" >Cadastre-se Já.</Link>
    </form>
  );
}
