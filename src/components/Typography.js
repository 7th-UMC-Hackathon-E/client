import styled, { css } from 'styled-components';

const typographyStyles = {
  h1: css`
    font-size: ${({ theme }) => theme.font.size.h1};
    font-weight: ${({ theme }) => theme.font.weight.semibold};
  `,
  h2: css`
    font-size: ${({ theme }) => theme.font.size.h2};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  `,
  bodyDefault: css`
    font-size: ${({ theme }) => theme.font.size.bodyDefault};
    font-weight: ${({ theme }) => theme.font.weight.regular};
  `,
  bodyTitle: css`
    font-size: ${({ theme }) => theme.font.size.bodyTitle};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  `,
  cardTitle: css`
    font-size: ${({ theme }) => theme.font.size.cardTitle};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  `,
};

const Typography = styled.p`
  font-family: ${({ theme }) => theme.font.family};
  ${({ variant }) => typographyStyles[variant] || typographyStyles.h2};
  color: ${({ theme }) => theme.colors.brown[300]};
`;

export default Typography;
