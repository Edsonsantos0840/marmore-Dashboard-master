"use client";
import TopoAdd from "../../components/topos/TopoAdd";
import UseHttp from "../../hooks/UseHttp";
import UserCard from "../../components/cards/UserCard";

export default function Usuarios() {
  const url: string = `http://localhost:3000/api/users `;

  const { user, err, loading}: {
    user: Array<object>;
    product: Array<object>;
    comment: Array<object>[];
    like: Array<object>;
    loading: boolean;
    err: boolean;
} = UseHttp(url);
  
  return (
    <section className="w-full md:absolute md:top-0 md:left-[20%]  md:w-10/12 m-auto p-1   ">
     <TopoAdd />
     {
     loading && <h1>Carregando Dados........</h1>
     }
     {
      err && <p>{err}</p>
     }
      {
        user &&
          user.map((e: any) => (
           <div key={e.id} >
            <UserCard data={e} />
           </div>
           
          ) ) 
        
      }
    </section>
  );
}
