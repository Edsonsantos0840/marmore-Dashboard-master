"use client";
import React, { useEffect, useState } from "react";
import Input from "../../../components/form/Input";
import UseConvert from "../../../hooks/UseConvert";
import ConvertImage from "../../../components/ConvertImage";
import { useRouter } from "next/navigation";

export default function EditarProdutos({params}: any) {
  const router = useRouter()
  const url: string = `http://localhost:3000/api/produtos/${params.id}`;
  const [category, setCategory] = useState<string>("");
  const [Title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<boolean>(false);

  const {
    image1,
    image2,
    image3,
    image4,
    convert642,
    convert643,
    convert644,
    convert645,
  } = UseConvert();

  useEffect(() => {
    async function getProduto(): Promise<void>{
      setLoading(true)
      try {
        const res = await fetch(url)
        const json = await res.json()
        setProduct(json)
      } catch (error) {
        setErr(error)
        console.log(error)
      }
      setLoading(false)
    }
    getProduto()
  },[url] )

 useEffect(() => {
  setTitle(product?.Title);
  setCategory(product?.category);
  setDescription(product?.description);

 },[product] )

 async function handleSubmit(e: React.SyntheticEvent): Promise<void> {
    e.preventDefault();
    const produto: object = {
      Title,
      image1,
      image2,
      image3,
      image4,
      category,
      description,
    };
      setLoading(true)
    try {
        await fetch(url, {
        method: "PUT",
        headers: {"Content-Type":"application/json" },
        body: JSON.stringify(produto)
      })
  
      alert('Produto editado com sucesso')
      router.push("/produtos")
      
    } catch (error) {
      setErr(error)
      console.log(error)
    }
    setLoading(false)
  }

  return (
    <div className="w-full md:absolute md:top-0 md:left-[19%]  md:w-10/12 m-auto pr-1 p-1" >
      <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-4/4  shadow-lg rounded-md p-10 "
    >
      <h1 className="text-3xl text-center font-bold ">
        Editar Usuário
      </h1>
      <label className=" text-center  w-full ">
        Categoria:
        <select
          className=" w-full text-center rounded-md border border-[#4e1d1d87] py-2 "
          id="category"
          value={category}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
        >
          <option value="">------Selecione uma Categoria</option>
          <option value="banheiros">Banheiros</option>
          <option value="cozinhas">Cozinhas</option>
          <option value="escadas">Escadas</option>
          <option value="exteriores">Exteriores</option>
        </select>
      </label>

       <label className=' w-full text-center'  >
        Título:
       <input  className="'py-4  h-12 rounded-md w-full border border-[#4e1d1d87] text-center my-2 '"
        type='text'
        placeholder='Digite o Título'
        value={Title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
      />
       </label> 
       
      <div className="flex justify-between items-center gap-6 ">
        <ConvertImage func={convert642} img={image1} />
        <ConvertImage func={convert643} img={image2} />
        <ConvertImage func={convert644} img={image3} />
        <ConvertImage func={convert645} img={image4} />
      </div>

      <label className=" text-center  w-full" >
        description:
        <textarea
          name="desc"
          placeholder="Descrição"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => 
          setDescription(e.target.value)}
        ></textarea>
      </label>

      {
        loading ? 
        <Input type="submit" value="Aguarde" disabled/> :
        <button>Enviar</button>
       }
           {
        err && <p>{err}</p>
      }
    </form>
    </div>
  );
}
