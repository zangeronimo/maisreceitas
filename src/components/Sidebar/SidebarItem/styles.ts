import styled, { css } from "styled-components";

interface ContainerProps {
  isActive?: boolean;
}

interface SubitemsProps {
  showSubitems: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  height: auto;
  align-items: center;
  justify-content: space-between;
  color: #999591;
  font-size: 16px;
  padding: 8px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  ${(props) =>
    props.isActive &&
    css`
      background: #209e91;
      transition: background-color 0.2s;

      &:hover {
        color: #999591;
      }
    `};

  div {
    display: flex;
    align-items: center;

    svg {
      margin: 0 8px;
      margin-right: 16px;
    }
  }
`;

export const Subitems = styled.div<SubitemsProps>`
  display: none;
  height: auto;
  background: #fff;

  a {
    color: #232129;
    font: 400 1.6rem Roboto, sans-serif;
    padding: 4px 0px;
    text-decoration: none;
    padding-left: 24px;
    transition: all 0.2s;

    & :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.secondaryLight};
    }
  }

  ${(props) =>
    props.showSubitems &&
    css`
      display: flex;
      flex-direction: column;
      align-items: flex-flex-start;
      margin-bottom: 16px;
    `};
`;
