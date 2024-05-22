'use client'
import React from 'react'
import CardProdutoUnico from '../../components/cards/CardProdutoUnico';
import UseFiltro from '../../hooks/UseFiltro';

export default function Banheiros() {

  const {produtoBanheiro}: {
    produtoBanheiro: object[];
} = UseFiltro()

  return (
    <section>
    <h1 className="pt-16">Banheiros</h1>
    { produtoBanheiro&&
      produtoBanheiro.map((produto: any) => (
      <div key={produto.id}>
        <CardProdutoUnico data={produto} />
      </div>
    ))}
  </section>
  )
}
