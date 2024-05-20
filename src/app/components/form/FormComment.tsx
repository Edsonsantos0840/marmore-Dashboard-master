"use client";
import React, { useState } from "react";
import UseHttp from "../../hooks/UseHttp";
import { useRouter } from "next/navigation";
import Input from "./Input";
import CardProdutoCliente from "../cards/CardProdutoCliente";
import Image from "next/image";
import FormLike from "./FormLike";

export default function FormComment(props: any) {

  const urlp = `/api/produtos/${props.dat}`;
  const url: string = "/api/comentarios";
  const [comentario, setComentario] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [atua, setAtua] = useState([]);
  const qtd = []
 
  const router = useRouter();

  const { product: data } = UseHttp(urlp);
  const {comment} = UseHttp(url);

      comment?.filter((e:any) => {
      if(e.ProdutoComments
        ?.Produto[0]?.id == data.id){
           qtd.push(e)
      }
    } )

  async function handleSubmit(e: any){
    e.preventDefault();
    const comenta = {
      comment: comentario,
      produtoId: Number(props.dat),
      userId: Number(props.userId),
    };
    setLoading(true)
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {"Content-Type":"application/json" },
        body: JSON.stringify(comenta)
      })
      const json = await res.json()
      setAtua((prevAtua) => [...prevAtua, json] )

      router.push(`/verProdutoUnico/${props.dat}`);
    } catch (error) {
      setErr(error)
      console.log(error)
    }
    setLoading(false)
  
  }
  return (
    <div>
      <CardProdutoCliente loading={loading} err={err} data={data} />
      <div className=" flex gap-2 m-auto justify-center items-center" >
      <FormLike  dat={props.dat} userId={props.userId}/>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full p-4 shadow-lg rounded-md "
      >
        {err && <p>{err}</p>}
        <div className="flex w-full justify-center items-end gap-1">
          <label className="w-[90%]">
            Comentário:
            <textarea
              className="w-[90%] h-10"
              placeholder="Deixe seu Comentário"
              value={comentario}
              onChange={(e: any) => setComentario(e.target.value)}
            ></textarea>
          </label>
          {loading ? (
            <Input type="submit" value="Aguarde" disabled />
          ) : (
            <button className='w-[10%] bg-[var(--corPrincipal)] text-white py-2 px-3' type="submit" >Comentar</button>
          )}
        </div>
      </form>
      {qtd &&
        qtd.map((e: any) => (
          <div
            key={e.id}
            className=" w-full m-auto mt-4 py-2 px-8  font-semibold bg-slate-100 rounded-md shadow-lg "
          >
            <div className="flex gap-5 p-3 items-center ">
              <Image
                className="rounded-full"
                src={e.UserComments?.User[0]?.userImage}
                alt={e.UserComments?.User[0]?.name}
                width={40}
                height={40}
              />
              <h4>{e.UserComments?.User[0]?.name}</h4>
              <p className="  bg-[var(--corPrincipal)] p-2  rounded-full shadow-md text-white " >{qtd.length}</p>
            </div>
            <p>{e.comment}</p>
          </div>
        ))
        }
    </div>
  );
}
