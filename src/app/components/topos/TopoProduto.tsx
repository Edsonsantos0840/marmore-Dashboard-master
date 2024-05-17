"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function TopoAdd() {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-around pt-6">
        <h1>Adicionar Produto</h1>
        <button onClick={() => router.push("cadastroProduto")}>
          Adicionar Produto
        </button>
      </div>
    </>
  );
}
