import { NextResponse } from "next/server";
import { prisma } from "../../../../libs/prisma";

export async function GET(request, { params }) {
  const user = await prisma.user.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(user);
}

export async function PUT(request, { params }) {
  const data = await request.json();

  const userAtualiza = await prisma.user.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });

  return NextResponse.json(userAtualiza);
}
export async function PATCH(request, { params }) {
  const data = await request.json();

  const userAtualiza = await prisma.user.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });

  return NextResponse.json(userAtualiza);
}

export async function DELETE(request, { params }) {
  try {
    const userRemove = await prisma.user.delete({
      where: {
        id: Number(params.id),
      },
    });

    return NextResponse.json(userRemove);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
