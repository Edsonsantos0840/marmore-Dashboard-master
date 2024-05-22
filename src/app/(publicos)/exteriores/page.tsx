'use client'
import React from 'react'
import CardProdutoUnico from '../../components/cards/CardProdutoUnico';
import UseFiltro from '../../hooks/UseFiltro';

export default function Exteriores() {

  const {produtoExteriores}: {
    produtoExteriores: object[];
} = UseFiltro()

  return (
    <section>
    <h1 className="pt-16">Exteriores</h1>
    { produtoExteriores&&
      produtoExteriores.map((produto: any) => (
      <div key={produto.id}>
        <CardProdutoUnico data={produto} />
      </div>
    ))}
  </section>
  )
}