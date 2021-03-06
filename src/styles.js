import styled from 'styled-components';
import { blue, gray, red } from '@carbon/colors';

export const SectionTitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Paragraph = styled.p`
  white-space: pre-wrap;
`;

export const Pill = styled.span`
  display: inline-block;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem 1rem;
  background-color: ${gray[60]};
  color: ${blue[20]};
  border-radius: 10px;
  border: 2px solid ${red[50]};
  font-weight: bold;
`;