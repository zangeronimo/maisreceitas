import styled, { css } from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  background: ${({ theme }) => theme.primary};
  padding: 1rem 1.6rem;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 20rem;
  }

  @media (min-width: ${({ theme }) => theme.queryes.smallDevices}) {
    img {
      width: 25rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.queryes.mediumDevices}) {
    img {
      width: 30rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.queryes.normalDevices}) {
    img {
      width: 35rem;
    }
  }
`;

export const ButtonToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;

  ${({ theme }) => css`
    color: ${theme.secondaryLight};
  `};

  border: none;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: currentColor;
    transition: color 0.2s;
  }

  @media (min-width: ${({ theme }) => theme.queryes.smallDevices}) {
    display: none;
  }
`;
