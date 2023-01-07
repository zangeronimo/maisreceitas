import { Aside } from "@/components/Aside";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RecipeCardList from "@/components/RecipeCardList";
import RecipeList from "@/components/RecipeList";
import SEO from "@/components/SEO";
import Sidebar from "@/components/Sidebar";
import { getSidebarLevels, ILevel } from "@/services/levels";

import { Container } from "@/styles/pages/NotFound";
import { GetServerSideProps } from "next";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  return (
    <Container>
      <SEO
        title="Página não encontrada ou não disponível no momento"
        url="404"
      />

      <Header />
      <div className="container">
        <div className="content">
          <h1>
            <FaExclamationTriangle /> Página não encontrada ou não disponível no
            momento
          </h1>
          <h2>Atualizamos nosso site</h2>
          <p>
            Realizamos uma atualização completa em nosso site para melhorar sua
            experiência, lamentamos o transtorno, realize uma busca para
            encontrar o que deseja.
          </p>
          <Footer />
        </div>
      </div>
    </Container>
  );
}
