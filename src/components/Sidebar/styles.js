import styled from 'styled-components'
import { SideNav } from 'carbon-components-react/lib/components/UIShell'
import { gray } from '@carbon/colors';

export const StyledSideNav = styled(SideNav)`
  @media (max-width: 640px) {
    display: none;
  }
`
export const StyledP = styled.div`
  margin-bottom: 10%;
  text-align: center;
  color: ${gray[50]};
`;