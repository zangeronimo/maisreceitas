import styled, { css } from "styled-components";

interface IContainerProps {
  showSidebar: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: none;
  position: fixed;
  padding: 2rem;
  top: 0;
  left: 0;
  z-index: 999;
  ${(props) =>
    props.showSidebar &&
    css`
      display: flex;
      flex-direction: column;
    `};

  background: #eaeaea;
  width: 100%;
  height: 100vh;

  @media (min-width: ${({ theme }) => theme.queryes.smallDevices}) {
    position: inherit;
    min-width: 25rem;
    max-width: 25rem;
    padding: 1rem 0;
  }
`;

export const Items = styled.div`
  overflow-y: scroll;
  height: 80%;
`;

export const Title = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.secondaryDark};
  }

  button {
    border: 0;
    background: none;
    font-size: 3.6rem;
    margin-top: -1rem;
  }

  @media (min-width: ${({ theme }) => theme.queryes.smallDevices}) {
    display: none;
  }
`;
