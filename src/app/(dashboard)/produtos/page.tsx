"use client";
import React, { useEffect, useState } from "react";
import TopoAdd from "../../components/topos/TopoProduto";
import ProdutoCard from "../../components/cards/ProdutoCard";

export default function Produtos() {
  const url = `http://localhost:3000/api/produtos `;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
 
  useEffect(() => {
    setLoading(true);
    async function getProduct() {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setProduct(json);
      } catch (error) {
        setErr(error);
        console.log(error);
      }
    }
    setLoading(false);
    getProduct();
  }, [url]);

  return (
    <section className="absolute top-0 left-[19%]  w-10/12 m-auto pr-1 ">
      <TopoAdd />
      {
     loading && <h1>Carregando Dados........</h1>
     }
     {
      err && <p>{err}</p>
     }
      {product &&
        product.map((produto: any) => (
          <div key={produto.id}>

            <ProdutoCard data={produto} />
          </div>
        ))}
    </section>
  );
}
