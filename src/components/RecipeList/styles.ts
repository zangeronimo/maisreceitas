import styled, { css } from 'styled-components';

interface LineProps {
  detach?: boolean;
}

export const Container = styled.div`
  margin: 24px 0;
`;

export const SubTitle = styled.h2`
  font-size: 2rem;
  border-bottom: 1px solid;
  color: #ff9000;
`;

export const Table = styled.table`
  width: 100%;

  a {
    text-decoration: none;
    color: #999591;

    &:hover {
      color: #555;
    }
  }
`;

export const TitleLine = styled.tr`
  background: #666360;
  color: #999591;
  height: 3.2rem;
  font-size: 1.8rem;
`;

export const Line = styled.tr<LineProps>`
  height: 2.8rem;
  transition: background-color 0.2s;
  cursor: pointer;

  ${props =>
    props.detach &&
    css`
      background: #eaeaea;
    `};

  &:hover {
    background: #ff9000;
    a {
      color: #555;
    }
  }
`;
