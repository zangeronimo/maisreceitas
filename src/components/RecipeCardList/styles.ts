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
  background: #eaeaea;
  border-radius: 6px;
  overflow: hidden;
  transition: background-color 0.2s;

  &:hover {
    background: #ccc;
    border-color: #ddd;
  }

  img {
    width: 100%;
  }
`;

export const RecipeCardTitle = styled.div`
  color: #999591;
  font-size: 1.6rem;
  line-height: 1.4;
  margin: 8px;
  transition: color 0.2s;

  &:hover {
    color: #f4ede8;
  }
`;
