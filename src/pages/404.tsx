import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import Sidebar, { getSidebarCategories, ICategories } from "@/components/Sidebar";
import { GetStaticProps } from "next";

import { Container, Adsense } from "@/styles/pages/NotFound";
import { FaExclamationTriangle } from "react-icons/fa";
import Adsense300x250 from "@/components/Adsense300x250";

interface INotFoundProps {
  categories?: ICategories[];
}

export default function NotFound({ categories }: INotFoundProps) {
  return  (
    <Container>
      <SEO title="Página não encontrada ou não disponível no momento" url="404" />
      <Header />
      <div className="container">
        <Sidebar categories={categories} />
        <div>
          <h1><FaExclamationTriangle /> Página não encontrada ou não disponível no momento</h1>
          <h2>Atualizamos nosso site</h2>
          <p>
            Realizamos uma atualização completa em nosso site para melhorar sua experiência, lamentamos o transtorno, realize uma busca para encontrar o que deseja.
          </p>

          <Adsense>
            <Adsense300x250 />
            <Adsense300x250 />
            <Adsense300x250 />
          </Adsense>
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
