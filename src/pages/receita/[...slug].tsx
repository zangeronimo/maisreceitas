import { useRouter } from "next/router";

export default function Recipe() {
  const router = useRouter();

  const slug = router.asPath.split("/").pop();

  if (!slug.includes(".htm")) {
    if (slug != "") router.push(`/busca/${slug.replaceAll("-", "%20")}`);
    else router.push("/404");
  } else {
    router.push(`/receita/${slug.replace(".htm", "")}`);
  }

  return <p>Carregando...</p>;
}
