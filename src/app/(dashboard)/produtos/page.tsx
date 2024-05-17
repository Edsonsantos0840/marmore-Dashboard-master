"use client";
import React from "react";
import TopoAdd from "../../components/topos/TopoProduto";
import UseHttp from "../../hooks/UseHttp";
import ProdutoCard from "../../components/cards/ProdutoCard";

export default function Produtos() {
  const url = `http://localhost:3000/api/produtos `;
  const { product, err, loading } = UseHttp(url);

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
