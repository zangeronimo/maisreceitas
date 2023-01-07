import styled from "styled-components";

export const Container = styled.div``;

export const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eaeaea;
  padding: 1rem;

  h2 {
    color: #ff9000;
    border-bottom: 1px solid;
    margin: 0;
    padding: 0;
  }

  label {
    color: #555;
  }

  label {
    margin-top: 1rem;
  }

  select {
    width: 100px;
    font-size: 1.5rem;
  }

  input {
    width: 315px;
    font-size: 1.5rem;
  }
  textarea {
    width: 315px;
    height: 80px;
    font-size: 1.5rem;
  }

  button {
    width: 80px;
    margin-top: 1rem;
  }

`;

export const Waiting = styled.div`
  border: 1px solid #ff9000;
  padding: 1rem;
  margin-top: 1rem;
  color: #555555;

  h3 {
    color: #ff9000;
    margin: 0;
    padding: 0;
  }

  & > div {
    margin-top: 1rem;
  }
`;

export const Approved = styled.div`
  border: 1px solid #eaeaea;
  padding: 1rem;
  margin-top: 1rem;
  color: #555555;

  & > div {
    margin-top: 1rem;
  }
`;
