import styled from 'styled-components';

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  padding: 0 40px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  background: #fff;
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const BtnHome = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 40px;
  height: 40px;
  font-size: 10px;
  text-align: center;
  border: 1px solid #000;
  box-sizing: border-box;
`;
