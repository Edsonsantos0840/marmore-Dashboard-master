import { NextResponse } from "next/server";
import { prisma } from "../../../../libs/prisma";


export async function GET(request, { params }) {
  const produto = await prisma.produto.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(produto);
}

export async function PUT(request, { params }) {
  const data = await request.json();

  const produtoAtualiza = await prisma.produto.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });

  return NextResponse.json(produtoAtualiza);
}
export async function PATCH(request, { params }) {
  const data = await request.json();

  const produtoAtualiza = await prisma.produto.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });

  return NextResponse.json(produtoAtualiza);
}

export async function DELETE(request, { params }) {
  try {
    const produtoRemove = await prisma.produto.delete({
      where: {
        id: Number(params.id),
      },
    });

    return NextResponse.json(produtoRemove);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
