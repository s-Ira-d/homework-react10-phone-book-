import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #c8e6c9;
`;

export const Text = styled.span`
  color: #1b3a2b;
`;

export const Button = styled.button`
  padding: 6px 12px;
  background-color: #a5d6a7;
  color: #1b3a2b;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #81c784;
  }
`;
