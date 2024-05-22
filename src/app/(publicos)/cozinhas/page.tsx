'use client'
import React from 'react'
import CardProdutoUnico from '../../components/cards/CardProdutoUnico';
import UseFiltro from '../../hooks/UseFiltro';

export default function Cozinhas() {

  const {produtoCozinhas}: {
    produtoCozinhas: object[];
} = UseFiltro()

  return (
    <section>
    <h1 className="pt-16">Cozinhas</h1>
    { produtoCozinhas&&
      produtoCozinhas.map((produto: any) => (
      <div key={produto.id}>
        <CardProdutoUnico data={produto} />
      </div>
    ))}
  </section>
  )
}