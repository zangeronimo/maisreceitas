import styled from "styled-components";

export const Container = styled.div``;

export const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 6px;
  padding: 1rem;

  h2 {
    color: ${({ theme }) => theme.secondaryLight};
    border-bottom: 1px solid;
    margin: 0;
    padding: 0;
  }

  label {
    color: ${({ theme }) => theme.secondaryLight};
  }

  label {
    margin-top: 1rem;
  }

  select {
    max-width: 200px;
    font-size: 2.5rem;
  }

  input {
    max-width: 415px;
    font-size: 2.5rem;
  }
  textarea {
    width: 100%;
    height: 80px;
    font-size: 2.5rem;
  }

  button {
    width: 180px;
    font-size: 3rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.primaryDark};
    background-color: ${({ theme }) => theme.secondaryLight};
    border: none;
    border-radius: 4px;
    padding: 1rem 0;
  }
`;

export const Waiting = styled.div`
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 1rem;
  margin-top: 1rem;
  color: #555555;

  h3 {
    color: ${({ theme }) => theme.primary};
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
