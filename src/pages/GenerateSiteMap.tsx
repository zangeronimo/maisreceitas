import SEO from '@/components/SEO';
import { generateSiteMap } from '@/lib/sitemap';
import getToken from '@/lib/token';
import api from '@/services/api';
import { GetStaticProps } from 'next';

interface IGenerateSiteMapProps {
  url: string[]
}

export default function GenerateSiteMap({ url }: IGenerateSiteMapProps) {
  return (
    <div>
      <SEO title="MaisReceitas - Os segredos da culinária ao seu alcance!" url="" shouldExcludeTitleSuffix shouldIndexPage={false} />
      <p>Gerando sitemap.xml</p>
      <p>{url.length} gerados...</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps<IGenerateSiteMapProps> = async () => {
  await getToken();
  const result = await api.get("/web/receita");

  const url = result.data.map(itens => {
    return `https://www.maisreceitas.com.br/receita/${itens.codigo}/${itens.url}`
  })

  if (url) {
    await generateSiteMap(url);
  }

  return {
    props: {
      url,
      revalidate: 86400,
    }
  }
}
