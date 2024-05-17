'use client'
import UseHttp from "../../hooks/UseHttp";

export default function CardLike() {
  const url: string = "/api/like";

  const { like } = UseHttp(url);

    // console.log(like.length)


  return (
    <div>
      {like &&
          <div className=" font-bold bg-[var(--corPrincipal)]  text-xl px-3 py-1 rounded-full shadow-md ">
            <p className="text-white">{like.length }</p>
          </div>
       }
    </div>
  )
}
