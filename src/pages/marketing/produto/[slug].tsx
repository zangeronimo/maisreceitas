import SEO from "@/components/SEO";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from 'next/router';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Aside } from '@/components/Aside';
import Sidebar from "@/components/Sidebar";
import { getProductBySlug, IProduct } from "@/services/marketing";
import { getSidebarLevels, ILevel } from "@/services/levels";
import PhotoGalery from "@/components/PhotoGalery";
import { apiURL } from "@/services/api";
import Link from "next/link";

import { Container, Galery, ProductContent } from "@/styles/pages/Product";

interface ProductProps {
  levels: ILevel[];
  product: IProduct;
  fullURL: string;
}

export default function Recipe({ levels, product, fullURL }: ProductProps) {
  const router = useRouter();

  if (router.isFallback || !product) {
    return <p>Carregando...</p>
  }

  return (
    <Container>
      <SEO
        title={product.title}
        url={fullURL}
        description={`Conheça o produto ${product.title}`}
        image={ product.banner }
      />
      <Header />
        <div className="container">
          <Sidebar categories={levels} />
          <div className="content">
          <h1>
            {product.title}
            <small>{product.category.name}</small>
          </h1>

          <Galery>
            {product.banner && (
              <>
                <Link href={product.url}>
                  <a title="Comprar" target="_blank" rel="noreferer">
                    <PhotoGalery galery={[{ id: '1', url: `${apiURL}${product.banner}`}]} recipe={product.title} />
                  </a>
                </Link>
                <Link href={product.url}>
                  <a title="Comprar" target="_blank" rel="noreferer">
                    <span>Quero comprar!</span>
                  </a>
                </Link>
              </>
            )}
          </Galery>

          <ProductContent dangerouslySetInnerHTML={{ __html: product.content }} />

          <Footer />
        </div>
        <Aside />
      </div>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<ProductProps> = async (context) => {
  const { slug } = context.params as { slug: string };

  const levels = await getSidebarLevels();
  const product = await getProductBySlug(slug);

  return {
    props: {
      levels,
      fullURL: `marketing/produto/${slug}`,
      product,
    },
  }
}
