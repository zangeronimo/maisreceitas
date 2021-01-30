import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Photo = styled.img`
  width: 32rem;
  border-radius: 3%;
  margin-left: 1.6rem;
  margin-bottom: 1.6rem;

  @media (min-width: 500px)  {
    width: 25rem;
  }

  @media (min-width: 700px)  {
    width: 30rem;
  }

  @media (min-width: 800px)  {
    width: 40rem;
  }

  @media (min-width: 900px)  {
    width: 50rem;
  }
`;

export const Thumbs = styled.div`
  display: flex;
  align-items: center;
`;

export const Thumb = styled.img`
  width: 10rem;
  margin: 8px 0;
  border-radius: 0 10% 0 10% ;
  cursor: pointer;

  & + img {
    margin-left: 8px;
  }
`;
