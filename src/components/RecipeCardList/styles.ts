import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  margin-top: 1rem;
  gap: 1.6rem;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const RecipeCard = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  border: 1px solid #ccc;
  background: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.secondaryLight};

  border-radius: 6px;
  overflow: hidden;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.primary};
  }

  img {
    width: 100%;
  }
`;

export const RecipeCardTitle = styled.div`
  color: currentColor;
  font-size: 1.6rem;
  line-height: 1.4;
  margin: 8px;
  transition: color 0.2s;
`;
