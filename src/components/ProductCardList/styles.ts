import styled from "styled-components";

export const Container = styled.div`
  h3 {
    color: #ff9000;
    border-bottom: 1px solid;
  }

  margin-bottom: 2rem;
`;

export const Content = styled.div`
margin-top: 0.8rem;
gap: 1rem;

@media (min-width: 600px) {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media (min-width: 1080px) {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
`;

export const ProductCard = styled.div`
display: flex;
flex-direction: column;
padding: 1rem;
border: 1px solid #ccc;
border-radius: 10px;
background: #eaeaea;
transition: background-color 0.2s;

&:hover{
  background: #ccc;
  border-color: #ddd;
}

img {
  width: 100%;
  border-radius: 3%;
}
`;

export const ProductCardTitle = styled.div`
  color: #999591;
  font-size: 1.6rem;
  margin: 8px 0 4px 0;
  transition: color 0.2s;

  &:hover {
    color: #F4EDE8;
  }
`;
