import styled from "styled-components";

export const StyledMain = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.lightLavender};
  }

  @media screen and (min-width: 1024px) {
  }
`;
