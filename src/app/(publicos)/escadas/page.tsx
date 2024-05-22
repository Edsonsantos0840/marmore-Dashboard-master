'use client'
import React from 'react'
import CardProdutoUnico from '../../components/cards/CardProdutoUnico';
import UseFiltro from '../../hooks/UseFiltro';

export default function Escadas() {

  const {produtoEscadas}: {
    produtoEscadas: object[];
} = UseFiltro()

  return (
    <section>
    <h1 className="pt-16">Escadas</h1>
    { produtoEscadas&&
      produtoEscadas.map((produto: any) => (
      <div key={produto.id}>
        <CardProdutoUnico data={produto} />
      </div>
    ))}
  </section>
  )
}