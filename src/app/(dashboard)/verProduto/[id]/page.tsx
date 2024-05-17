"use client";
import { useRouter } from "next/navigation";
import { BsReplyAllFill } from "react-icons/bs";
import UseHttp from '../../../hooks/UseHttp'
import CardUnico from "../../../components/cards/CardUnico";

export default function VerProduto({ params }: any) {
  const url = `/api/produtos/${params.id}`
  const route = useRouter();

  const {product: data, err, loading}: any = UseHttp(url)

  return (
    <section className="absolute top-0 left-[18%]  w-10/12 m-auto p-1 ">
           {
     loading && <h1>Carregando Dados........</h1>
     }
     {
      err && <p>{err}</p>
     }
      <div className="flex p-3 justify-around items-center">
        <h1>Produto</h1>
        <div className="flex gap-3  items-center">
          <BsReplyAllFill
            onClick={() => route.push("/produtos")}
            className="text-3xl cursor-pointer"
          />
          <h2>Voltar </h2>
        </div>
      </div>
      {data && <CardUnico data={data} />}
    </section>
  );
}