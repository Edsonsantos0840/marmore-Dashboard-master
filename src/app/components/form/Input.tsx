export default function Input(props: any) {
  return (
    <>
      <label className=" w-full text-center">
        <span>{props.texto}</span>
        <input
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.Change}
          className={
            props.type === "submit"
              ? "bg-red-600 text-white font-bold cursor-pointer rounded-md w-full h-10 bg-[var(--corPrincipal)] hover:text-red-700 hover:bg-white hover:border-2 hover:border-red-800 m-auto my-2"
              : "py-2 rounded-md w-full border border-[#4e1d1d87] m-auto  my-2 "
          }
        />
      </label>
    </>
  );
}
