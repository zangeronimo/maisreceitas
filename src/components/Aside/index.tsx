import Image from "next/image";
import FbPage from "../FbPage";
import { Container, Content } from "./styles";

export const Aside: React.FC = () => {
  return (
    <Container>
      <Content>
        <a
          href="https://sun.eduzz.com/1062375?a=24789011"
          target="_blank"
          title="Panetones e Chocotones - Gourmet"
        >
          <Image
            src="/eduzz/chocotone_panetone_gourmet.png"
            alt="Panetones e Chocotones - Gourmet"
            width={280}
            height={130}
          />
        </a>

        <a
          href="https://sun.eduzz.com/1081056?a=24789011"
          target="_blank"
          title="Resina'Mour - Artesanato em Resina"
        >
          <Image
            src="/eduzz/curso_artesanato.png"
            alt="Resina'Mour - Artesanato em Resina"
            width={280}
            height={130}
          />
        </a>

        <a
          href="https://sun.eduzz.com/730181?a=24789011"
          target="_blank"
          title="Close Friends Shark"
        >
          <Image
            src="/eduzz/close_friends_shark.png"
            alt="Close Friends Shark"
            width={280}
            height={130}
          />
        </a>

        <FbPage
          width="280"
          height="130"
          hideCover={false}
          showFacepile={false}
          hideCTA={false}
          smallHeader={false}
        />
      </Content>
    </Container>
  );
};
