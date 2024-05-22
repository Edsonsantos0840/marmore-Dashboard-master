import UseHttp from "./UseHttp";

export default function UseFiltro(): {
  produtoBanheiro: object[];
  produtoCozinhas: object[];
  produtoEscadas: object[];
  produtoExteriores: object[];
} {
  const url: string = `http://localhost:3000/api/produtos`
   
    const {product, err, loading}: {
      user: Array<object>;
      product: Array<object>;
      comment: object[];
      like: Array<object>;
      loading: boolean;
      err: boolean;
  } = UseHttp(url)

    const produtoBanheiro: Array<object> = product?.filter((e: { category: string; }) =>  {
        if (e.category === "banheiros") {
          loading && (<><h1>Carregando Dados.......</h1></>)
          err && (<><p>{err}</p></>)
          return e;
        }
      });
    const produtoCozinhas: Array<object> = product?.filter((e: { category: string; }) =>  {
        if (e.category === "cozinhas") {
          loading && (<><h1>Carregando Dados.......</h1></>)
          err && (<><p>{err}</p></>)
          return e;
        }
      });
    const produtoEscadas: Array<object> = product?.filter((e: { category: string; }) =>  {

          if (e.category === "escadas") {
            loading && (<><h1>Carregando Dados.......</h1></>)
            err && (<><p>{err}</p></>)
          return e;
        }
      });
    const produtoExteriores: Array<object> = product?.filter((e: { category: string; }) =>  {

          if (e.category === "exteriores") {
            loading && (<><h1>Carregando Dados.......</h1></>)
            err && (<><p>{err}</p></>)
          return e;
        }
      });
  return {produtoBanheiro, produtoCozinhas, produtoEscadas, produtoExteriores}
}
