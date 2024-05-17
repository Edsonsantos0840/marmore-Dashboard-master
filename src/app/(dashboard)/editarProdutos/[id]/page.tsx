"use client";
import React, { useEffect, useState } from "react";
import Input from "../../../components/form/Input";
import UseConvert from "../../../hooks/UseConvert";
import UseHttp from "../../../hooks/UseHttp";
import ConvertImage from "../../../components/ConvertImage";
import { useRouter } from "next/navigation";

export default function EditarProdutos({params}: any) {
  const router = useRouter()
  const url = `http://localhost:3000/api/produtos/${params.id}`;
  const [category, setCategory] = useState("");
  const [Title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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

  const { setProduct, product, err, loading } = UseHttp(url);

 useEffect(() => {
  product &&
  setTitle(product.Title);
  product &&
  setCategory(product.category);
  product &&
  setDescription(product.description);

 },[product] )
  function handleSubmit(e: any) {
    e.preventDefault();
    const produto = {
      Title,
      image1,
      image2,
      image3,
      image4,
      category,
      description,
    };
      setProduct(produto);
      alert('Produto editado com sucesso')
      router.push("/produtos");
  }

  return (
    <div className='absolute top-0 left-[19%] w-10/12 m-auto pr-4 ' >
      <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-4/4  shadow-lg rounded-md p-10 "
    >
      {
        err && <p>{err}</p>
      }
      <h1 className="text-3xl text-center font-bold ">
        Editar Usuário
      </h1>
      <label className=" text-center  w-full ">
        Categoria:
        <select
          className=" w-full text-center rounded-md border border-[#4e1d1d87] py-2 "
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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
        onChange={(e: any) => setTitle(e.target.value)}
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
          onChange={(e: any) => 
          setDescription(e.target.value)}
        ></textarea>
      </label>

      {
        loading ? 
        <Input type="submit" value="Aguarde" disabled/> :
        <button>Enviar</button>
       }
    </form>
    </div>
  );
}
