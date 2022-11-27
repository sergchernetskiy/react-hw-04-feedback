import styled from '@emotion/styled';

export const StatList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const StatisticValue = styled.p`
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  margin: ${p => p.theme.space[0]};
  color: ${p => p.theme.colors.pink};
`;
