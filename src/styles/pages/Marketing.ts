import styled from "styled-components";

export const Container = styled.div`
  h1 {
    margin-bottom: 2rem;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.primary};
  }

  a {
    text-decoration: none;
  }

  .content {
    flex: 1;
    padding-right: 16px;
  }
`;
