import styled from 'styled-components';
import * as BootStrap from 'react-bootstrap';

export const Button = styled(BootStrap.Button)`
  display: inline-block;
  width: 100%;
  vertical-align: middle;

  ${({ type }) => {
    switch (type) {
      case 'default':
        return `
          border-radius: 30px;
        `;
    }
  }}
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return `
          background: #2658a1;
          &:hover {
            box-shadow: 0 5px #333;
          }
        `;
      case 'secondary':
        return `
          background: #069aa1;
          &:hover {
            box-shadow: 0 5px #333;
          }
        `;
    }
  }}
  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
          padding: 2px 10px;
          font-size: 12px;
        `;
    }
  }}
`;
