import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 3.2rem;
  max-width: 50rem;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  @media screen and (min-width: 768px) {
    text-align: center;
  }
`;

export const StyledForm = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: 3.2rem;
  @media screen and (min-width: 768px) {
    border-radius: 12px;
    padding: 3.2rem;
  }

  h1 {
    font: ${({ theme }) => theme.fonts.headingM};
    font-size: 2.4rem;
    font-weight: 600;
    margin: 0.8rem 0;
  }
  legend {
    font: ${({ theme }) => theme.fonts.bodyM};
    font-weight: 300;
    color: ${({ theme }) => theme.colors.gray};
    margin-bottom: 4rem;
  }
  p {
    text-align: center;
    width: 100%;
    font: ${({ theme }) => theme.fonts.bodyM};
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 300;
    margin-bottom: 0.4rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
  &:last-of-type {
    margin-bottom: 0;
  }
  label {
    text-transform: capitalize;
    margin-bottom: 0.5rem;
    font: ${({ theme }) => theme.fonts.bodyS};
    color: ${({ theme }) => theme.colors.gray};
  }
  div {
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    padding: 0 1.9rem;
    gap: 1.9rem;
    input {
      padding: 1.1rem 0;
      outline: none;
      border: none;
      width: 100%;
    }
  }
`;
