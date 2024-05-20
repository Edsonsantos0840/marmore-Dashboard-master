import { NextResponse } from "next/server";
import { prisma } from "../../../libs/prisma";

export async function GET() {
  const like = await prisma.likes.findMany({
    select: {
      like: true,
      produtoId: true,
      userId: true
    }
  });

  return NextResponse.json(like);
}
export async function POST(request) {

  try {
  const { like, produtoId, userId} = await request.json();
  
  if (isNaN(produtoId)) {
    return new Response("O ID do produto não é válido", { status: 400 });
  }
  if (isNaN(userId)) {
    return new Response("O ID do usuaário não é válido", { status: 400 });
  }

  const newlike = await prisma.likes.create({
    data: {
      like,
      produto: {
        connect: {
          id: Number(produtoId)
        }
      },
      User: {
        connect: {
          id: Number(userId)
        }
      }
    },
  });
  return NextResponse.json(newlike) ;
} catch (error) {
  console.error('Erro ao salvar o like:', error);
  return new Response("Erro ao salvar o like", { status: 500 });
}
  
}
