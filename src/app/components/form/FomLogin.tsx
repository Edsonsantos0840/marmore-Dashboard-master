"use client";
import { SyntheticEvent } from "react";
import React, { useState } from "react";
import Input from "./Input";
import { useRouter } from "next/navigation";
import { SignInResponse, signIn} from "next-auth/react";
import Link from "next/link";

export default function FormLogin() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const router = useRouter();

  async function handleSubmit(e: SyntheticEvent): Promise<void> {
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
      <label >
        E-mail:
      <input       
        type="email"
        placeholder="Digite seu E-mail"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value) }
      />
      </label>

      <label>
        Password:
        <input       
        type="password"
        placeholder="Digite seu Senha"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value) }
      />
      </label>
      <Input type="submit" value="Login" />
{/* 
      <p>Login com Google</p>
      <button className="bg-zinc-400 p-2 rounded-md text-white w-full" onClick={() => signIn('google') } >Login com Google</button> */}

      <p className="text-xs" >Não Possui Cadastro?</p>
      <Link href={"/cadastro"}  className="text-xl" >Cadastre-se Já.</Link>
    </form>
  );
}
