import styled from '@emotion/styled';

export const SectionStyled = styled.section`
  text-align: center;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.l};
`;

export const Title = styled.h1`
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  background-image: ${p => p.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
