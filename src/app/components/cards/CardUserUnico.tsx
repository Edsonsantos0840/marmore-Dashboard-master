import Image from "next/image";
import { FaRegEdit, FaTrash, FaRegCircle } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { useRouter } from 'next/navigation'
import UseHttp from '../../hooks/UseHttp'

export default function UserCardUnico({ data }: any) {
  const url = `http://localhost:3000//api/users/${data.id}`

  const { delUser} = UseHttp(url);
 
  const router = useRouter()
  
  return (
    <>
      <div
        key={data.id}
        className=" bg-[#00000026]  rounded-sm shadow-lg  mb-5 p-14 mt-48 "
      >

        <div className="flex justify-between gap-4 " >
        <div className="flex flex-col justify-between items-center ">
       
       <h2 className=" text-red-700 text-4xl font-bold  ">{data.name}</h2>

       <p className="  text-[#6b6b6b] text-2xl ">{data.email}</p>

       <p className="  text-[#6b6b6b] text-2xl ">
         {data.fone ? data.fone : "Não possui"}
       </p>

       <p className="  text-[#6b6b6b] text-2xl ">{data.tipo}</p>     

       <div className="flex justify-between  items-center gap-6 text-red-100 py-3 px-28 bg-[#b11010] text-2xl rounded-md cursor-pointer hover:scale-105">
       
           <FaRegEdit className="cursor-pointer" onClick={() => router.push("editarUsers/" + data.id)} />
      
           {/* <BsFillSendFill className="cursor-pointer"  onClick={() => router.push("verUser/" + data.id)} /> */}
        
         <FaTrash onClick={delUser} className="cursor-pointer" />

         {data.status === "ativo" ? <FaRegCircle className="bg-green-400 rounded-full border-none" />: <FaRegCircle className="bg-red-700 rounded-full border-none" />}
       </div>
        </div>
          {
            data.userImage &&
          <div>
            <Image className=" rounded-md shadow-lg "
              src={data.userImage}
              alt={data.name}
              width={620}
              height={480}
              id="ima"
            />
          </div>
           }
        </div>
      </div>
    </>
  );
}