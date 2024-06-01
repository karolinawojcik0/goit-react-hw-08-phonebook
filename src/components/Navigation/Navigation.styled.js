import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const changeActive = isActive => {
  switch (isActive) {
    case 'active':
      return 'color: #023047';
    case 'inactive':
      return 'color: #47a8bd';
    default:
      return 'color: #47a8bd';
  }
};

export const Link = styled(NavLink)`
  display: inline-block;
  font-family: Arial;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #47a8bd;
  }
  &:not(:hover, :focus) {
    ${({ isActive }) => changeActive(isActive)}
  }
  nav &:hover,
  nav &:focus {
    color: magenta;
  }
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
`;
