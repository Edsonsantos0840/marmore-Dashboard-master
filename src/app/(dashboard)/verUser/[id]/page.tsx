"use client";
import { useRouter } from "next/navigation";
import { BsReplyAllFill } from "react-icons/bs";
import UseHttp from '../../../hooks/UseHttp'
import UserCardUnico from "../../../components/cards/CardUserUnico";

export default function VerUsuario({ params }: any) {
const url: string = `/api/users/${params.id}`
  const route = useRouter();
  const {user: data, err, loading}: {
    user: Array<object>;
    product: Array<object>;
    comment: Array<object>;
    like: Array<object>;
    loading: boolean;
    err: boolean;
} = UseHttp(url)

  return (
    <section className="w-full md:absolute md:top-0 md:left-[20%]  md:w-10/12 m-auto p-1 ">
           {
     loading && <h1>Carregando Dados........</h1>
     }
     {
      err && <p>{err}</p>
     }
      <div className="flex p-3 justify-around items-center">
        <h1>Usuário</h1>
        <div className="flex gap-3  items-center">
          <BsReplyAllFill
            onClick={() => route.push('/usuarios')}
            className="text-3xl cursor-pointer"
          />
          <h2>Voltar </h2>
        </div>
      </div>
      {data && <UserCardUnico data={data} />}
    </section>
  );
}
