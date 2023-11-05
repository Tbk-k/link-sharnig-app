import styled from "styled-components";

export const Wrapper = styled.div`
  /* your styles here */
  h1 {
    color: ${({ theme }) => theme.colors.purple};
    font-family: ${({ theme }) => theme.fonts.headingM};
  }
`;
