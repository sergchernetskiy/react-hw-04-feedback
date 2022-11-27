import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;
  list-style: none;
`;

export const OptionBtn = styled.button`
  width: 100px;
  padding: ${p => p.theme.space[3]}px;
  border: none;
  cursor: pointer;
  background: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  transition: background-color 250ms linear, color 250ms linear;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.yellow};
    color: ${p => p.theme.colors.accentColor};
    box-shadow: ${p => p.theme.shadows.active};
  }
`;
