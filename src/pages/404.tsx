import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import Sidebar, { getSidebarCategories, ICategories } from "@/components/Sidebar";
import { GetStaticProps } from "next";

import '@/styles/pages/NotFound';
import { Container } from "@/styles/pages/NotFound";
import { FaExclamationTriangle } from "react-icons/fa";
import Adsense250x250 from "@/components/Adsense250x250";

interface INotFoundProps {
  categories?: ICategories[];
}

export default function NotFound({ categories }: INotFoundProps) {
  return  (
    <Container>
      <SEO title="Página não encontrada ou não disponível no momento" />
      <Header />
      <div className="container">
        <Sidebar categories={categories} />
        <div>
          <h1><FaExclamationTriangle /> Página não encontrada ou não disponível no momento</h1>
          <h2>Atualizamos nosso site</h2>
          <div>
            Realizamos uma atualização completa em nosso site para melhorar sua experiência, lamentamos o transtorno, realize uma busca para encontrar o que deseja.
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  )
}

export const getStaticProps: GetStaticProps<INotFoundProps> = async () => {
  const categories = await getSidebarCategories();

  return {
    props: {
      categories,
      revalidate: 30,
    }
  }
}
