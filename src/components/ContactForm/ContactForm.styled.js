import styled from "styled-components";

export const Form = styled.form`
  background-color: #e8f5e9;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  color: #2e4d34;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #c8e6c9;
  border-radius: 8px;
  background-color: #f1f8f2;
`;

export const Button = styled.button`
  width: 160px;
  padding: 10px;
  background-color: #81c784;
  color: #1b3a2b;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #66bb6a;
  }
`;
