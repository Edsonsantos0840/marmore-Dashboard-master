"use client";
import React, { SyntheticEvent, useState } from "react";
import Input from "./Input";
import { useRouter } from "next/navigation";

export default function FormUsuario() {
  const url = "http://localhost:3000/api/users";
  const tipo = "usuario";
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<boolean>(false);

  const router = useRouter();

  async function handleSubmit(e: SyntheticEvent): Promise<void> {
    e.preventDefault();
    const user: object = {
      name,
      email,
      password,
      tipo,
    };
    setLoading(true);
    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
    } catch (error) {
      setErr(error);
      console.log(error);
    }
    setLoading(false);
    router.push("/login");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center w-2/4 p-5 m-auto shadow-lg rounded-md"
    >
      <Input
        texto="Nome"
        type="text"
        placeholder="Digite seu Nome"
        value={name}
        Change={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <Input
        texto="E-mail"
        type="email"
        placeholder="Digite seu E-mail"
        value={email}
        Change={(e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value)
        }
      />
      <Input
        texto="Senha"
        type="password"
        placeholder="Digite seu Senha"
        value={password}
        Change={(e: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value)
        }
      />
      <Input
        texto="Confirmar Senha"
        type="password"
        placeholder="Confirme a Senha"
        value={confirmPass}
        Change={(e: React.ChangeEvent<HTMLInputElement>) =>
        setConfirmPass(e.target.value)
        }
      />
      {loading ? (
        <Input type="submit" value="Aguarde" disabled />
      ) : (
        <Input type="submit" value="Enviar" />
      )}
      {err && <p>{err}</p>}
    </form>
  );
}
