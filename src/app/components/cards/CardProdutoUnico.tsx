"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CardProdutoUnico({ data }: any) {
  const router = useRouter();
  return (
    <>
      <div
        key={data?.id}
        className="flex flex-wrap content-center p-3 gap-2  mt-5 mb-5 "
      >
      {
        data &&
        <Image
        src={data.image1 || ''}
        alt={data.title || ''}
        width={220}
        height={120}
        className="rounded-md shadow-lg border-2 border-[#00000047] cursor-pointer"
        onClick={() => router.push("/verProdutoUnico/" + data.id)}
      />
      }
      </div>
    </>
  );
}
