import React from "react";

export default function Botao(props: any) {
  return (
    <button className=" px-8 py-0 text-red-700 rounded-lg border-2 border-[var(--corPrincipal)] hover:scale-110 hover:bg-[var(--corPrincipal)] hover:text-white text-sm w-40 h-8 font-sans">
      {props.texto}{" "}
    </button>
  );
}
