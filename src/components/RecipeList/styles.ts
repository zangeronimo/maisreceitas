import styled, { css } from 'styled-components';

interface LineProps {
  detach?: boolean;
}

export const Container = styled.div`
  margin: 24px 0;
`;

export const SubTitle = styled.h2`
  font-size: 3.2rem;
  margin-top: 16px;
  color: #999591;
`;

export const Table = styled.table`
  width: 100%;

  a {
    text-decoration: none;
    color: #999591;

    &:hover {
      color: #ff9000;
    }
  }
`;

export const TitleLine = styled.tr`
  background: #666360;
  color: #999591;
  height: 3.2rem;
  font-size: 2.4rem;
`;

export const Line = styled.tr<LineProps>`
  height: 2.8rem;
  transition: background-color 0.2s;
  cursor: pointer;

  ${props =>
    props.detach &&
    css`
      background: #3E3B47;
    `};

  &:hover {
    background: #232129;
  }
`;
