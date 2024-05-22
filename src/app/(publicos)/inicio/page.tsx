
import {getServerSession } from "next-auth";
import { nextAuthOptions } from "../../api/auth/[...nextauth]/route";
import Image from "next/image";

export default async function Início() {
  const session: any = await getServerSession<any>(nextAuthOptions);

  return (
    <div className="pt-16">
      Olá {session?.user.name}{" "}
      <Image
        src={session?.user.image || ''}
        alt="img"
        width={40}
        height={40}
        className="rounded-full"
      />
      <p>
        Com o ID: {session?.user.id} <br />{" "}
      </p>{" "}
      email : {session?.user.email} <br /> seja bem vindo!
    </div>
  );
}
