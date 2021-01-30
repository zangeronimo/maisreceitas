import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;

    h1 {
      display: flex;
      margin-top: 2.4rem;
      font-size: 3.6rem;
      color: #666360;

      svg {
        margin-right: 1.6rem;
      }
    }

    h2 {
      font-size: 3.2rem;
      margin-top: 16px;
      color: #999591;
    };
`;

export const Adsense = styled.div`
  margin-top: 0.8rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
