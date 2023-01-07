import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  a {
    text-decoration: none;
  }

  h3 {
    color: #FF9000;
    border-bottom: 1px solid;
    margin-bottom: 1rem;
  }

`;

export const LastRecipes = styled.div`
  ul {
    margin-bottom: 2rem;

    li {
      list-style: none;
      color: #777;

      transition: background-color 0.2s;
    }

    li:hover {
      background: #eaeaea;
    }
  }
`;
