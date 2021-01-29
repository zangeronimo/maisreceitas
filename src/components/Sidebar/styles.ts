import styled, { css } from 'styled-components';

interface IContainerProps {
  showSidebar: boolean;
}

export const Container = styled.div<IContainerProps>`
    display: none;
    ${props => props.showSidebar &&
    css`
      display: block;
    `};

    margin-right: 1.6rem;
    background: #3E3B47;
    min-width: 210px;
    max-width: 250px;
`;
