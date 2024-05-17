"use client";
import CardUnico from "../../components/cards/CardUnico";
import { useRouter } from "next/navigation";
import { BsReplyAllFill } from "react-icons/bs";

export default function CardProdutoCliente( props : any) {
  const route = useRouter();

  return (
    <section className="pt-16">
      <div className="flex p-3 justify-between items-center">
        {props.loading && <h1>Carregando Dados........</h1>}
        {props.err && <p>{props.err}</p>}
        {props.data && (
          <>
            <h1>{props.data.category}</h1>
            <div className="flex gap-3  items-center">
              <BsReplyAllFill
                onClick={() => route.push(`/${props.data.category}`)}
                className="text-3xl cursor-pointer"
              />
              <h2>Voltar </h2>
            </div>
          </>
        )}
      </div>
      {props.data && <CardUnico data={props.data} />}
    </section>
  );
}
