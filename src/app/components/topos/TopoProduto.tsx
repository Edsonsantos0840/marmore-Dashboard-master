"use client";
import { useRouter } from "next/navigation";

export default function TopoAdd() {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-around pt-6">
        <h1>Produtos</h1>
        <button onClick={() => router.push("/cadastroProduto")}>
          Adicionar Produto
        </button>
      </div>
    </>
  );
}
