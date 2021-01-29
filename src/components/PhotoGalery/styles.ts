import styled from 'styled-components';

export const Container = styled.div`
  margin-top: -7.2rem;
  float: right;
  display: flex;
  flex-direction: column;
`;

export const Photo = styled.img`
  width: 50rem;
  border-radius: 3%;
  margin-left: 1.6rem;
  margin-bottom: 1.6rem
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
