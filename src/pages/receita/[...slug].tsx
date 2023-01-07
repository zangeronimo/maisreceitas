import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Recipe() {
  const router = useRouter();
  const slug = router.asPath.split("/").pop();

  useEffect(() => {
    if (slug) router.push(`/busca/${slug.replaceAll("-", "%20")}`);
    else router.push("/404");
  }, [slug]);

  return <p>Carregando...</p>;
}
