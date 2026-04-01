import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const Text = styled.span``;

export const Button = styled.button`
  padding: 6px 10px;
  background-color: crimson;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;
