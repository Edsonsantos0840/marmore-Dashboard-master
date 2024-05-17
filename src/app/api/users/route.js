import { NextResponse } from "next/server";
import { prisma } from "../../../libs/prisma";
import bcrypt from 'bcrypt'

export async function GET() {
  const user = await prisma.user.findMany()

  return NextResponse.json(user);
}

export async function POST(request) {
  
  try {
    const { name, email, password, fone, tipo, status, userImage } = await request.json();

    const  userUnico = await prisma.user.findUnique({
      where: {
        email
      }
    })
  
    if( userUnico){
      return new Response("E-mail já cadastrado!", { status: 400 });
    }
    // if (isNaN(userId)) {
    //   return new Response("O ID do usuaário não é válido", { status: 400 });
    // }  
    const hashPass = await bcrypt.hash(password, 10)

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPass,
        fone,
        userImage,
        tipo,
        status,
       
      },
    
    });
    console.log(newUser)
    const {password: _, ...user} = newUser
    return NextResponse.json(user);
  } catch (error) {
    console.error('Erro ao Cadastrar o usuário:', error);
    return new Response("Erro ao  ao Cadastrar o usuário", { status: 500 });
  }
}
