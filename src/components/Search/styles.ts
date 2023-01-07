import styled, { css } from "styled-components";

export const Container = styled.div`
  align-items: center;
  width: 100%;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    font-size: 2rem;
    height: 4.8rem;
    min-width: 29rem;
    width: 100%;
    padding: 1.6rem 0.8rem;
    padding-right: 5rem;

    ${({ theme }) => css`
      color: ${theme.primaryDark};
      border: 1px solid ${theme.primaryDark};
    `}
  }

  @media (min-width: ${({ theme }) => theme.queryes.smallDevices}) {
    width: 40rem;
  }
  @media (min-width: ${({ theme }) => theme.queryes.mediumDevices}) {
    width: 50%;

    input {
      font-size: 2.5rem;
      height: 6rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.queryes.normalDevices}) {
    input {
      font-size: 3rem;
      height: 7rem;
      padding-right: 6rem;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  color: ${({ theme }) => theme.primaryDark};
  margin-left: -4.1rem;
  background: none;
  border: 0;

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  @media (min-width: ${({ theme }) => theme.queryes.normalDevices}) {
    margin-left: -4.5rem;

    svg {
      width: 3.2rem;
      height: 3.2rem;
    }
  }
`;
