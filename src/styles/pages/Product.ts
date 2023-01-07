import styled from 'styled-components';

export const Container = styled.div`

  strong {
    color: #FF9000;
    border-bottom: 1px solid;
  }

  h1 {
    display: flex;
    flex-direction: column;
    font-size: 2.4rem;
    color: #FF9000;

    margin-bottom: 2rem;

    small {
      font-size: 1.8rem;
    }
  }

  h2 {
    font-size: 2.4rem;
    margin: 16px;
    color: #999591;
  };

  a {
    text-decoration: none;
  }

  .content {
    flex: 1;
    padding-right: 16px;
  }
`;

export const ProductContent = styled.article`
  margin-bottom: 1.5rem;
  color: #999591;
  line-height: 3.2rem;
  font-size: 1.8rem;
`;

export const Galery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 16px 0;

  span {
    color: #ff9000;
    font-size: 3rem;
    font-weight: bold;
  }

  @media (min-width: 600px) {
    float: right;
  }
`;

export const RecipeCardList = styled.div`
  margin-top: 0.8rem;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1080px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const RecipeCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  margin-bottom: 16px;
  padding: 16px;
  border: 1px solid #666360;
  border-radius: 10%;
  background: #3E3B47;
  transition: background-color 0.2s;

  &:hover{
    background: #28262E;
    border-color: #3E3B47;
  }

  img {
    width: 100%;
    border-radius: 3%;
  }
`;

export const RecipeCardTitle = styled.div`
  color: #999591;
  font-size: 1.6rem;
  margin: 8px 0 4px 0;
  transition: color 0.2s;

  &:hover {
    color: #F4EDE8;
  }
`;
