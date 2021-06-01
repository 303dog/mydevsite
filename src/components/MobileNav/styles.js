import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from 'carbon-components-react/lib/components/Button';
import { red, gray } from '@carbon/colors';




export const Container = styled.div`
  display: none;
  @media (max-width: 640px) {
    display: block;
  }
`;

export const Spacer = styled.div`
  height: 55px;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const NavLink = styled(Link)`
  width: 25%;
 
`;

export const NavButton = styled(Button)`
  width: 100%;
  justify-content: center;
  border: 8px;
  border-color: ${gray[50]} ;
  border-style: groove;
  background-color: ${red[60]};
  color: ${red[10]};
`;