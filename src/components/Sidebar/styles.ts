import styled, { css } from 'styled-components';

interface IContainerProps {
  showSidebar: boolean;
}

export const Container = styled.div<IContainerProps>`
    display: none;
    ${props => props.showSidebar &&
    css`
      display: flex;
      flex-direction: column;
    `};

    margin-right: 1.6rem;
    background: #3E3B47;
    width: 250px;
`;

export const Adsense = styled.div`
  margin-top: 16px;
  width: 250px;
  height: 250px;
`;
