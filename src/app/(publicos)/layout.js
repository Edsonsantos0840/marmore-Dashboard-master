import { Inter } from "next/font/google";
import "../globals.css";
import NavPublicos from '../components/navBar/NavPublicos'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
 
  title: "M&A Marmores e Granitos.",
  description: "M&A Marmores e Granitos Tem o Melhor Desing e o Melhor Acabamento Para Você.",
  keywords: "Marmores e Granitos, Desing ambiente, Acabamento construção, marmore, granito, pedra onix, pedras ornamentais, pia de marmore, mesa de marmore, escada de marmore, balcao de marmore, soleira de marmore, porcelanato, construtora, construção civil, alvenaria, piso, pisos e revestimentos"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
          <NavPublicos/>
          {children}
     
      </body>
    </html>
  );
}
