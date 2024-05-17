import Image from "next/image";
import { FaRegEdit, FaTrash, FaRegCircle } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { useRouter } from 'next/navigation'
import UseHttp from '../../hooks/UseHttp'

export default function UserCard({ data }: any) {
  const url = `http://localhost:3000//api/users/${data.id}`

  const { delUser, err, loading} = UseHttp(url);
 
  const router = useRouter()
  
  return (
    <>
         {
     loading && <h1>Carregando Dados........</h1>
     }
     {
      err && <p>{err}</p>
     }
      <div
        key={data.id}
        className=" bg-[#00000026]  rounded-sm shadow-lg mt-5 mb-5 "
      >

        <div className="flex justify-between items-center ">
        {
            data.userImage &&
          <div>
            <Image className=" rounded-full "
              src={data.userImage}
              alt={data.name}
              width={60}
              height={60}
              id="ima"
            />
          </div>
           }
          <h2 className=" text-red-700 font-bold  w-[16.5%]">{data.name}</h2>

          <p className="  text-[#6b6b6b]  w-[21%] ">{data.email}</p>

          <p className="  text-[#6b6b6b]  w-[10%]">
            {data.fone ? data.fone : "Não possui"}
          </p>

          <p className="  text-[#6b6b6b]  w-[8%] ">{data.tipo}</p>     

          <div className="flex justify-center  items-center gap-3 text-red-700 p-4 bg-[#fecaca82] w-[19%]">
          
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

