import { Container } from './styles';
import { FaStar, FaStarHalf } from 'react-icons/fa';

interface IStarsProps {
  rate: number;
}

export default function Stars({ rate }: IStarsProps) {

  if(!rate) {
    return <Container>&nbsp;</Container>;
  }

  let starsIcons: number[] = [2, 4, 6, 8, 10];

  return (
    <Container>
      { starsIcons.map(star => {
          if (star <= rate) return <FaStar key={star} />;
          if (star > rate && rate > star - 2) return <FaStarHalf key={star} />;
      }) }
    </Container>
  );
}
