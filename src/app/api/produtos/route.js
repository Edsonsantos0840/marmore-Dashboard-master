import { NextResponse } from "next/server";
import { prisma } from "../../../libs/prisma";


export async function GET() {
  const produto = await prisma.produto.findMany(
 {
  select: {
    category: true,
    id: true,
    likes: {
      select: {
        like: true,
        produtoId: true,
        userId: true,
      }
    },
    image1: true,
    image2: true,
    image3: true,
    image4: true,
    
  }
 }
)

  return NextResponse.json(produto);
}

export async function POST(request) {
  const { Title, image1, image2, image3, image4, category, description } =
    await request.json();
    
  const newProduto = await prisma.produto.create({
    data: {
      Title,
      image1,
      image2,
      image3,
      image4,
      category,
      description,
      }
    },
  );

  return NextResponse.json(newProduto);
}
