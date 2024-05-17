
import Image from "next/image";
import Link from "next/link";

export default function CardUnico({ data}: any) {
  return (
    <>
      <div
        key={data.id}
        className="max-w-sm:flex-col content-center p-1 gap-2  bg-[#00000026]  rounded-xl shadow-lg mt-5 mb-5 "
      >
        <div className=" gap-3  ">
          <h2 className=" text-red-700 font-bold text-center text-2xl p-1 mb-6">
            {data.Title}
          </h2>
          <div >
            <div  >
              <iframe 
                scrolling="no" 
                src={data.image1}
                width={610}
                height={510}
                name="frame"
                className=" m-auto rounded-md hover:scale-110 hover:mt-10  left-[19%] ease-in overflow-hidden duration-300"
              >
                <h1>Seu navegador não é compaível com a tecnologia.</h1>
              </iframe>
            </div>

            <div className="flex gap-3 flex-wrap justify-center mt-16">
              <Link href={data.image1} target="frame">
                <Image
                  src={data.image1 || ""}
                  alt={data.title && data.title}
                  width={140}
                  height={70}
                  className="rounded-md shadow-lg border-2 border-[#00000047] cursor-pointer "
                />
              </Link>

              {data.image2 ? (
                <Link href={data.image2} target="frame">
                  <Image
                    src={data.image2 || ""}
                    alt={data.title && data.title}
                    width={140}
                    height={70}
                    className="rounded-md shadow-lg border-2 border-[#00000047] cursor-pointer "
                  />
                </Link>
              ) : (
                <div className="rounded-md shadow-lg border-2 border-[#00000047] w-44 flex justify-center items-center text-red-700 bg-[#00000047]">
                  <h3>Não possui</h3>
                </div>
              )}

              {data.image3 ? (
                <Link href={data.image3} target="frame">
                  <Image
                    src={data.image3 || ""}
                    alt={data.title && data.title}
                    width={140}
                    height={70}
                    className="rounded-md shadow-lg border-2 border-[#00000047] cursor-pointer "
                  />
                </Link>
              ) : (
                <div className="rounded-md shadow-lg border-2 border-[#00000047] w-44 flex justify-center items-center text-red-700 bg-[#00000047] cursor-pointer">
                  <h3>Não possui</h3>
                </div>
              )}

              {data.image4 ? (
                 <Link href={data.image4} target="frame">
                 <Image
                   src={data.image4 || ""}
                   alt={data.title && data.title}
                   width={140}
                   height={70}
                   className="rounded-md shadow-lg border-2 border-[#00000047] cursor-pointer "
                 />
                 </Link>
              ) : (
                <div className="rounded-md shadow-lg border-2 border-[#00000047] w-44 flex justify-center items-center text-red-700 bg-[#00000047] cursor-pointer">
                  <h3>Não possui</h3>
                </div>
              )}
            </div>

            <p className="  text-[#6b6b6b] text-center p-2 text-lg w-11/12 bg-white rounded-md m-auto my-5"><span>Descrição:</span> <br />
              {data.description}
            </p>

            {/* componente */}

            <div className="flex items-center justify-between text-xs p-3">
              <p className="text-[#00a1bac7] ">
                {new Date(data.createdAt).toLocaleDateString()}
              </p>
              <div className="text-2xl text-[#026f80c7]">

              </div>
              <p className="text-[#00a1bac7] ">
                {new Date(data.updatedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
