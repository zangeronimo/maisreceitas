import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;

    h1 {
      display: flex;
      margin: 2.4rem;
      font-size: 2.4rem;
      color: #666360;

      svg {
        margin-right: 1.6rem;
        width: 2.4rem;
        height: 2.4rem;
      }
    }

    h2 {
      font-size: 2rem;
      margin-top: 2.4rem;
      color: #999591;
      align-items: center;
    };

    p {
      line-height: 2.4rem;
      margin-top: 2.4rem;
    }
`;

export const Adsense = styled.div`
  margin: 3.2rem 0;
  width: 300px;
  height: 250px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
