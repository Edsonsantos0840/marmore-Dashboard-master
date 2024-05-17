'use client'
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import UseHttp from '../hooks/UseHttp'

const CountLike = () => {
    const url = "http://localhost:3000/api/like";
  const [countLike, setCountLike] = useState(1);
 
  const {id} = useParams()
  const route = useRouter()
 const {setPosta}: any = UseHttp(url)

  function darLike(e: any){
    e.preventDefault();
     setCountLike(countLike )
    try {
      // const response = await fetch(url, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     like: countLike,
      //     produtoId: id,
      //   }),

      // });
      setPosta({
            like: countLike,
            produtoId: id,
          })

    } catch (error) {
      console.error('Erro:', error);
    }
    route.push(`verProdutoUnico/${id}`)
  };

  return (
    < >
      <button onClick={darLike}>Like</button>
    </>
  );
};

export default CountLike;


