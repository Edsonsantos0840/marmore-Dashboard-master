import { Inter } from "next/font/google";
import "../globals.css";
import NavDashboard from '../components/navBar/NavDashboard'
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
 
  title: "M&A Marmores e Granitos.",
  description: "M&A Marmores e Granitos Tem o Melhor Desing e o Melhor Acabamento Para Você.",
  keywords: "Marmores e Granitos, Desing ambiente, Acabamento construção, marmore, granito, pedra onix, pedras ornamentais, pia de marmore, mesa de marmore, escada de marmore, balcao de marmore, soleira de marmore, porcelanato, construtora, construção civil, alvenaria, piso, pisos e revestimentos"
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(nextAuthOptions)

  if(!session){
    redirect('/login')
  }

  return (
    <html lang="pt-br">
      <body className={inter.className}>
          <NavDashboard/>
          {children}
     
      </body>
    </html>
  );
}
