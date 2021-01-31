import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    font-size: 2rem;
    margin-left: 8px;
    height: 48px;
    border-radius: 5px 0 0 5px;
    padding: 1.6rem 0.8rem;
    background: #232129;
    color: #666360;
    border: 1px solid #232129;
    transition: border-color 0.2s;
    transition: background-color 0.2s;
    transition: color 0.2s;

    &:focus {
      border-color: #ff9000;
      background: #312E38;
      color: #999591;
    }

    &:hover {
      background: #312E38;
      border-color: #312E38;
      color: #999591;
    }
  }
`;

export const Button = styled.button`
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 0 5px 5px 0;
  background: #232129;
  color: #666360;
  transition: color 0.2s;

  &:hover {
    color: #ff9000;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
