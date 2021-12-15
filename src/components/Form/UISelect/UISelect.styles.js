import styled from 'styled-components';

const UISelect = styled.div`
  position: relative;
  display: inline-block;
`;

const Select = styled.select`
  display: none;
`;

const SelectBox = styled.div`
  position: relative;
  width: 100%;
  min-width: 200px;
  height: 40px;
  padding: 8px 10px;
  font-size: 14px;
  border: 1px solid #d0d0d0;
  box-sizing: border-box;
  border-radius: 4px;

  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    margin-top: -4px;
    right: 10px;
    border-top: 8px solid #606060;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 0;
    width: 0;
    height: 0;
    overflow: hidden;
  }

  ${({ on }) => {
    switch (on) {
      case true:
        return `
          &:after{
            border-bottom: 8px solid #606060;
            border-top: none;
          }
        `;
      default:
        return `
        `;
    }
  }}
`;

const Container = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;

  ${({ on }) => {
    switch (on) {
      case true:
        return `
          display: block;
        `;
      default:
        return `
          display: none;
        `;
    }
  }}
`;
const List = styled.ul`
  border: 1px solid #d0d0d0;
  list-style: none;
  padding: 0;
`;
const Item = styled.li`
  list-style: none;
  padding: 4px 10px;
  height: 32px;
  box-sizing: border-box;
`;
const A = styled.a`
  text-decoration: none;

  ${({ on }) => {
    switch (on) {
      case true:
        return `
          color: red
        `;
      default:
        return ``;
    }
  }}
`;

export { UISelect, Select, SelectBox, Container, List, Item, A };
