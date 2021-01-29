import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #28262E;
  padding: 1.6rem 0;
  width: 100%;

  @media (min-width: 650px) {
    flex-direction: row;
    padding-right: 1.6rem;
  }
`;

export const Logo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;

  @media (min-width: 650px) {
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
    img {
      margin-left: 1.6rem;
      width: 100%;
    }
  }

  svg {
    margin-right: 16px;
    width: 32px;
    height: 32px;
    color: #666360;
    transition: color 0.2s;

    &:hover {
      color: #3E3B47;
    }

    @media (min-width: 650px) {
      display: none;
    }
  }
`;
