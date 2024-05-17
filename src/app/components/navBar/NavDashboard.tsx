import Link from "next/link";
import { MdCoPresent, MdContactPhone } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { SlPresent } from "react-icons/sl";
import { FaHome } from "react-icons/fa";
import {
  AiOutlineDiff,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import MostraEsconde from "../MostraEsconde";

export default function NavDashboard() {
  return (
    <nav
      className="
      flex flex-col gap-[.2rem] justify-around  
      p-1 shadow-xl w-[19%] h-[calc(100vh-1.2rem)] bg-red-800 text-white"
    >
      <div className=" flex gap-[.3] p-1  items-center ">
        <BsShop className="text-2xl" />
        <MostraEsconde />
      </div>

      <div></div>
      <Link
        href={"/"}
        className="hover:scale-110 hover:text-red-700 hover:bg-white p-1"
      >
        <div className=" flex gap-2   items-center ">
          <FaHome className="text-4xl" />
          Início
        </div>
      </Link>
      <hr />
      <Link
        href={"/contato"}
        className="hover:scale-110 hover:text-red-700 hover:bg-white p-1"
      >
        <div className=" flex gap-2   items-center ">
          <MdContactPhone className="text-3xl" />
          Contatos
        </div>
      </Link>
      <Link
        href={"/cadastroProduto"}
        className="hover:scale-110 hover:text-red-700 hover:bg-white p-1"
      >
        <div className=" flex gap-2   items-center ">
          <AiOutlineDiff className="text-4xl" />
          Cadastro Produto
        </div>
      </Link>
      <Link
        href={"/cadastroUsuario"}
        className="hover:scale-110 hover:text-red-700 hover:bg-white p-1"
      >
        <div className=" flex gap-2   items-center ">
          <AiOutlineUsergroupAdd className="text-4xl" />
          Cadastro Usuário
        </div>
      </Link>
      <Link
        href={"/produtos"}
        className="hover:scale-110 hover:text-red-700 hover:bg-white p-4"
      >
        <div className=" flex gap-2  items-center ">
          <SlPresent className="text-3xl" />
          Produtos
        </div>
      </Link>
      <Link
        href={"/usuarios"}
        className="hover:scale-110 hover:text-red-700 hover:bg-white p-4"
      >
        <div className=" flex gap-2   items-center ">
          <MdCoPresent className="text-3xl" />
          Usuários
        </div>
      </Link>
      <div></div>
      <div></div>
    </nav>
  );
}
