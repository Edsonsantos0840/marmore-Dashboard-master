import Image from "next/image";

interface ImgProps {
  func: any;
  img: string;
}

export default function ConvertImage({ func, img }: ImgProps){
  return (
    <>
      <label className="
         cursor-pointer border-dashed border-2 border-zinc-500/50 w-[150px] h-[100px] 
         flex justify-center items-center text-sm bg-slate-200 text-red-600 my-2" >
        <input type="file" onChange={func} className="hidden" />

        {!img ? (
          "Selecione a Imagem"
        ) : (
          <div>
            <Image src={img || ''} alt={"foto" || ''} width={150} height={100} />
          </div>
        )}
      </label>
    </>
  );
}
