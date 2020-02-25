import styled from 'styled-components';
import { colors } from 'styles/variables';

export const PrimaryCta = styled.a`
  background-color: ${colors.black};
  border-radius: 5rem;
  border: 1px solid ${colors.black};
  color: ${colors.white};
  cursor: pointer;
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.5rem 2.25rem 1.4rem;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background-color: ${colors.sgFallBack05};
    border-color: ${colors.sgFallBack05};
    color: ${colors.black};
  }

  &:active {
    border-color: ${colors.sgFallBack06};
    background-color: ${colors.sgFallBack06};
  }
`;

export const SecondaryCta = styled(PrimaryCta)`
  background-color: ${colors.white};
  border-color: ${colors.black};
  color: ${colors.black};

  &:hover {
    background-color: ${colors.white};
    border-color: ${colors.sgFallBack05};
    color: ${colors.black};
  }

  &:active {
    border-color: ${colors.sgFallBack06};
    background-color: ${colors.sgFallBack06};
  }
`;
