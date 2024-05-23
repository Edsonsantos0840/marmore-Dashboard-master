import Link from "next/link";
import { MdCoPresent, MdContactPhone } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { SlPresent } from "react-icons/sl";
import { FaHome } from "react-icons/fa";
import { AiOutlineDiff, AiOutlineUsergroupAdd } from "react-icons/ai";
import MostraEsconde from "../MostraEsconde";

export default function NavDashboard() {
  return (
    <nav
      className=" flex w-full h-12 justify-center
       md:flex-col  md:justify-around  items-center md:items-start
      p-1 shadow-xl md:w-[19%] md:h-[calc(100vh-1.2rem)] bg-red-800 text-white"
    >
      <div className="hidden md:flex gap-[.3] p-1  items-center ">
        <BsShop className="text-lg md:text-xl lg:xl" />
        <MostraEsconde />
      </div>

      <Link
        href={"/"}
        className=" hidden md:flex hover:scale-110 hover:text-red-700 hover:bg-white p-1"
      >
        <div className=" flex gap-1   items-center hover:text-red-700 hover:bg-white">
          <FaHome className="text-xl " />
          <p className="text-sm text-white hover:text-red-700 ">Início</p>
        </div>
      </Link>
     
      <Link
        href={"/contato"}
        className="hover:scale-110 hidden md:flex hover:text-red-700 hover:bg-white p-1"
      >
        <div className=" flex gap-1   items-center hover:text-red-700 hover:bg-white">
          <MdContactPhone className="text-xl" />
          <p className="text-sm text-white hover:text-red-700  " >Contatos</p>
        </div>
      </Link>
      <Link
        href={"/cadastroProduto"}
        className="hover:scale-110 hover:text-red-700 hover:bg-white   p-1"
      >
        <div className=" flex gap-1   items-center hover:text-red-700 hover:bg-white">
          <AiOutlineDiff className="text-xl" />
          <p className="text-sm text-white hover:text-red-700 " >Cadastro</p> <span className="text-xs">Produto</span>
        </div>
      </Link>
      <Link
        href={"/cadastroUsuario"}
        className="hover:scale-110 hover:text-red-700 hover:bg-white p-1"
      >
        <div className=" flex gap-1   items-center hover:text-red-700 hover:bg-white ">
          <AiOutlineUsergroupAdd className="text-xl" />
          <p className="text-sm text-white hover:text-red-700" >Cadastro</p><span className="text-xs">Usuário</span>
        </div>
      </Link>
      <Link
        href={"/produtos"}
        className="hover:scale-110 hover:text-red-700 hover:bg-white p-4"
      >
        <div className=" flex gap-1  items-center hover:text-red-700 hover:bg-white ">
          <SlPresent className="text-lg" />
          <p className="text-sm text-white hover:text-red-700" >Produtos</p>
        </div>
      </Link>
      <Link
        href={"/usuarios"}
        className="hover:scale-110 hover:text-red-700 hover:bg-white p-4"
      >
        <div className=" flex gap-1   items-center hover:text-red-700 hover:bg-white ">
          <MdCoPresent className="text-lg" />
          <p className="text-sm text-white hover:text-red-700" >Usuários</p>
        </div>
      </Link>
    
    </nav>
  );
}
