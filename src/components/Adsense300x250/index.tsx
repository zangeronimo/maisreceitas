import { Adsense } from '@ctrl/react-adsense';
import { Container } from './styles';

export default function Adsense300x250() {
  return (
    <Container>
      <Adsense
        client="ca-pub-0338836461603030"
        slot="3567300605"
        style={{ width: 300, height: 250 }}
        format=""
      />
    </Container>
  );
};
