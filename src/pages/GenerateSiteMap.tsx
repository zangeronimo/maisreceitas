import SEO from "@/components/SEO";
import { generateSiteMap } from "@/lib/sitemap";
import { getRecipes } from "@/services/recipes";
import { GetServerSideProps } from "next";

interface IGenerateSiteMapProps {
  url: string[];
}

export default function GenerateSiteMap({ url }: IGenerateSiteMapProps) {
  return (
    <div style={{ color: "#666" }}>
      <SEO
        title="MaisReceitas - Os segredos da culinária ao seu alcance!"
        url=""
        shouldExcludeTitleSuffix
        shouldIndexPage={false}
      />
      <p>Gerando sitemap.xml</p>
      <p>{url.length} gerados...</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<
  IGenerateSiteMapProps
> = async () => {
  const result = await getRecipes({ params: { perPage: 999999 } });

  const url = result.data.map((itens) => {
    return `https://maisreceitas.com.br/receita/${itens.slug}`;
  });

  url.push("https://maisreceitas.com.br/marketing");

  if (url) {
    await generateSiteMap(url);
  }

  return {
    props: {
      url,
    },
  };
};
