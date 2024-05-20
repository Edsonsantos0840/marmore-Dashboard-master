// icones
"use client";
import { AiOutlineLike } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/navigation";
import UseHttp from "../../hooks/UseHttp";

export default function FormLike(props: any) {
  const url: string = "/api/like";
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [atua, setAtua] = useState([]);
  const qtd = []
  const [count, setCount] = useState(1);

  const router = useRouter();
 
  const {like} = UseHttp(url)

  //funçao para criar like
  async function handleSubmit(e: any) {
    e.preventDefault();
    setCount(count);
    const curtir = {
      like: count,
      produtoId: Number(props.dat),
      userId: Number(props.userId),
    };
    setLoading(true);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(curtir),
      });
      const json = await res.json();
      setAtua((prevAtua) => [...prevAtua, json]);

      router.refresh();
    } catch (error) {
      setErr(error);
      console.log(error);
    }
    setLoading(false);
  }

    like?.filter((e:any) => {
      if(e.produtoId == props.dat){
       qtd.push(e.like)
      }
    } )

  return (
    <>
      <button onClick={handleSubmit}>
        <AiOutlineLike className="text-3xl" />
      </button>
      <p className=" font-bold bg-[var(--corPrincipal)]  text-xl px-3 py-1 rounded-full shadow-md text-white " > {qtd.length}</p>
    </>
  );
}
