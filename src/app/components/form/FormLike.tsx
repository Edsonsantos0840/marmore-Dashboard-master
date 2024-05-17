// icones
'use client'
import { AiOutlineLike } from "react-icons/ai";
import { useState } from "react";
import CardLike from "../cards/CardLike";
import { useRouter } from "next/navigation";

export default function FormLike(props: any) {
    const url: string = "/api/like";
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
    const [count, setCount] = useState(1)

    const router = useRouter()

    //funçao para criar like
   async function handleSubmit(e: any){
      e.preventDefault()
      setCount(count)
      const curtir= {
        like: count,
        produtoId: Number(props.dat),
        userId: Number(props.userId),
      }
      setLoading(true)
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: {"Content-Type":"application/json" },
          body: JSON.stringify(curtir)
        })
    
        alert('Produto cadastrado com sucesso')
        router.refresh()
        
      } catch (error) {
        setErr(error)
        console.log(error)
      }
      setLoading(false)
    }
  
  return (
    <>
      <button onClick={handleSubmit} ><AiOutlineLike className="text-3xl" /></button>
      <CardLike/>
    </>
  );
}