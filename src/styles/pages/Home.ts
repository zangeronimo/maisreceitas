import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  a {
    text-decoration: none;
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

export const HomeFooter = styled.div`
  margin: 3.2rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1080px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
