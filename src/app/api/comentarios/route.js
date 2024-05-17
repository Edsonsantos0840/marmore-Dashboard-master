import { NextResponse } from "next/server";
import { prisma } from "../../../libs/prisma";

export async function GET() {
  const comment = await prisma.comments.findMany(
    {
     select: {
      id: true,
      comment: true,
      UserComments: {
        select: {
          User: {
            select: {
              id: true,
              name: true,
              userImage: true,
            }
          }
        }
      }
     }
  },
);

  return NextResponse.json(comment);
}

export async function POST(request) {
  try {
    const { comment, produtoId, userId} = await request.json();
   
    if (isNaN(produtoId)) {
      return new Response("O ID do produto não é válido", { status: 400 });
    }
    if (isNaN(userId)) {
      return new Response("O ID do usuaário não é válido", { status: 400 });
    }

    const newComment = await prisma.comments.create({
      data: {
        comment,
        ProdutoComments: {
          create: {
            Produto: {
              connect: {
                id: Number(produtoId)
              },
            },
          },
        },
      UserComments: {
        create: {
          User: {
            connect: {
              id: Number(userId)
            },
          },
        },
      },
      },
    });
    return NextResponse.json(newComment);
  } catch (error) {
    console.error("Erro ao salvar o comentário:", error);
    return new Response("Erro ao salvar o comentário", { status: 500 });
  }
}
