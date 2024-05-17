import { NextResponse } from "next/server";
import { prisma } from "../../../libs/prisma";

export async function GET(request, { params }) {
  const comment = await prisma.comment.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(comment);
}

export async function PUT(request, { params }) {
  const data = await request.json();

  const commentAtualiza = await prisma.comment.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });

  return NextResponse.json(commentAtualiza);
}
export async function PATCHT(request, { params }) {
  const data = await request.json();

  const commentAtualiza = await prisma.comment.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });

  return NextResponse.json(commentAtualiza);
}

export async function DELETE(request, { params }) {
  try {
    const commentRemove = await prisma.comment.delete({
      where: {
        id: Number(params.id),
      },
    });

    return NextResponse.json(commentRemove);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
