import { Adsense } from '@ctrl/react-adsense';
import { Container } from './styles';

export default function Adsense300x100() {
  return (
    <Container>
      <Adsense
        client="ca-pub-0338836461603030"
        slot="8599888014"
        style={{ width: 300, height: 100 }}
        format=""
      />
    </Container>
  );
};
