import styled from "styled-components";

export const Container = styled.aside`
  width: 100%;
  padding: 1rem 0;

  @media (min-width: 650px) {
    position: relative;
    width: 300px;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  gap: 0.5rem;
`;
