import styled from 'styled-components';

const Input = styled.input`
  min-width: 280px;
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 15px;
  border-radius: 15px;
  outline: none;
  border: none;
  color: #023047;

  &::placeholder {
    color: #023047;
  }
`;

export default Input;
