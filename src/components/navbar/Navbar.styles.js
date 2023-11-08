import styled from "styled-components";

export const StyledNavbar = styled.nav`
  @media screen and (min-width: 768px) {
    padding: 24px;
  }
`;

export const StyledMenu = styled.menu`
  list-style: none;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  margin: 0;
  div {
    display: flex;
    align-items: stretch;
    justify-content: center;
    button {
      border: none;
      background-color: transparent;
      span {
        display: none;
      }
    }
  }
  @media screen and (min-width: 768px) {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.white};
    div {
      button {
        border-radius:8px;
        padding: 5px 24px;
        display: flex;
        span {
          display: block;
        }
        &[id="active"] {
        background-color: ${({ theme }) => theme.colors.lightLavender};
      }
    }
  }
`;
