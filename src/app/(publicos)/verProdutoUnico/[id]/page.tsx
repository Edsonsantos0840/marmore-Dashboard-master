
import {getServerSession } from "next-auth";
import { nextAuthOptions } from "../../../api/auth/[...nextauth]/route";
import FormComment from "../../../components/form/FormComment";

export default async function Início({params}: any) {
  const session: any = await getServerSession<any>(nextAuthOptions);

  const id = params.id

  return (
    <div >
      <FormComment dat={id} userId={session?.user.id} />
    </div>
  );
}
