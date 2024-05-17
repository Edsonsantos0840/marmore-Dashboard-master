import UseHttp from "./UseHttp";
const url: string = `http://localhost:3000/api/produtos`
export default function UseFiltro() {
   
    const {product, err, loading} =UseHttp(url)

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
