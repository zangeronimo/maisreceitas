import SEO from "@/components/SEO";
import { GetServerSideProps } from "next"
import { useRouter } from 'next/router';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Aside } from '@/components/Aside';
import Sidebar from "@/components/Sidebar";
import { getCategories, ICategory } from "@/services/marketing";
import { getSidebarLevels, ILevel } from "@/services/levels";
import ProductCardList from "@/components/ProductCardList";

import { Container } from "@/styles/pages/Marketing";

interface MarketingProps {
  levels: ILevel[];
  fullURL: string;
  categories: ICategory[];
}

export default function Recipe({ levels, categories, fullURL }: MarketingProps) {
  const router = useRouter();

  if (router.isFallback || !categories) {
    return <p>Carregando...</p>
  }

  return (
    <Container>
      <SEO
        title="Marketing Mais Receitas | Os melhores produtos da internet em um só lugar."
        url={fullURL}
        description={`Conheça os melhores produtos do mercado, compre e aproveite.`}
      />
      <Header />
        <div className="container">
          <Sidebar categories={levels} />
          <div className="content">
          <h1>
            Marketing Mais Receitas
            <small>Os melhores produtos da internet em um só lugar.</small>
          </h1>

          {categories && categories.map(category => (
            category.products.length > 0 && (
              <ProductCardList key={category.id} products={category.products} label={category.name} />
            )
          ))}

          <Footer />
        </div>
        <Aside />
      </div>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<MarketingProps> = async () => {
  const levels = await getSidebarLevels();
  const categories = await getCategories();

  return {
    props: {
      levels,
      fullURL: 'marketing',
      categories,
    }
  }
}
