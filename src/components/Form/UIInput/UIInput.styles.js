import styled from 'styled-components';

const UIInput = styled.div`
  display: inline-block;
`;

const Input = styled.input`
  width: 100%;
  padding: 2px 10px;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
          min-width: 120px;
          font-size: 14px;
          height: 32px;
        `;
      default:
        return `
          min-width: 200px;
          font-size: 12px;
          height: 40px;
        `;
    }
  }}

  ${({ varient }) => {
    switch (varient) {
      case 'basic':
        return `
          border: none;
          border-bottom: 1px solid #d0d0d0;

          &:focus {
            border: none;
            border-bottom: 1px solid #000000;
          }
        `;
      case 'default':
      default:
        return `
          border: 1px solid #d0d0d0;
          border-radius: 4px;

          &:focus {
            border: 1px solid #000000;
          }
        `;
    }
  }}
`;

export { UIInput, Input };
