import Image from "next/image";
import { FaRegEdit, FaTrash, FaRegCircle } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { useRouter } from 'next/navigation'
import { useState } from "react";


export default function UserCard({ data }: any) {
  const url = `http://localhost:3000//api/users/${data.id}`
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<boolean>(false);
 
  const router = useRouter()

  async function delUser(): Promise<void>{
    setLoading(true)
    const confirmar: boolean = confirm("Voce realmente quer deletar?")
    if(confirmar){
      try {
        await fetch(url, {
        method: "DELETE"
      });
     
     } catch (error) {
          setErr(error)
          console.log(error)
     }
    }
    
    setLoading(false)
    router.push("/usuarios")
 }
  
  return (
    <>
          {
          loading && <h1>Carregando Dados........</h1>
          }
          {
            err && <p>{err}</p>
          }
      <div
        key={data?.id}
        className=" text-xs md:text-base bg-[#00000016]  rounded-sm shadow-lg mt-5 mb-5 "
      >

        <div className="flex justify-between items-center ">
        {
            data.userImage &&
          <div className=" w-[30px] h-[30px] md:w-[50px] md:h-[50px] " >
            <Image className=" rounded-full "
              src={data.userImage || ""}
              alt={data.name || "" }
              width={60}
              height={60}
              id="ima"
            />
          </div>
           }
          <h2 className="text-sm md:text-base text-red-700 font-bold w-[25%]  md:w-[16.5%]">{data.name}</h2>

          <p className=" hidden md:flex text-sm md:text-base  text-[#6b6b6b]  w-[21%] ">{data.email}</p>

          <p className="text-sm md:text-base  text-[#6b6b6b]  w-[21%]">
            {data.fone ? data.fone : "Não possui"}
          </p>

          <p className="text-sm md:text-base  text-[#6b6b6b]  w-[16%] ">{data.tipo}</p>     

          <div className="flex justify-between  items-center gap-1 md:gap-2 text-red-700 p-2 md:p-4 bg-[#fecaca82] w-[18%]">
          
              <FaRegEdit className="cursor-pointer" onClick={() => router.push("editarUsers/" + data.id)} />
         
              <BsFillSendFill className="cursor-pointer"  onClick={() => router.push("verUser/" + data.id)} />
           
            <FaTrash onClick={delUser} className="cursor-pointer" />

            {data.status === "ativo" ? <FaRegCircle className="bg-green-400 rounded-full" />: <FaRegCircle className="bg-red-600 rounded-full" />}
          </div>
        </div>
      </div>
    </>
  );
}

