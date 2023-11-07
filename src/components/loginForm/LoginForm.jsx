import React from "react";
import {
  InputWrapper,
  LogoWrapper,
  StyledForm,
  Wrapper,
} from "./LoginForm.styles";
import { ReactComponent as LogoLarge } from "../../assets/images/logo-devlinks-large.svg";
import { ReactComponent as IconPassword } from "../../assets/images/icon-password.svg";
import { ReactComponent as IconEmail } from "../../assets/images/icon-email.svg";
import Btn from "../btn/Btn";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isCreateAccount, setIsCreateAccount] = React.useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const toggleCreateAccount = () => {
    setIsCreateAccount(!isCreateAccount);
  };

  const formDetails = [
    {
      id: "email",
      label: "email address",
      type: "email",
      placeholder: "e.g. alex@email.com",
      img: <IconPassword />,
    },
    {
      id: "password",
      label: isCreateAccount ? "create password" : "password",
      type: "password",
      placeholder: isCreateAccount
        ? "At least 8 characters"
        : "Enter your password",
      img: <IconEmail />,
    },
  ];
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoLarge />
      </LogoWrapper>
      <StyledForm>
        {isCreateAccount ? (
          <>
            <h1>Create account</h1>
            <legend>Let's get you started sharing your links!</legend>
          </>
        ) : (
          <>
            <h1>Login</h1>
            <legend>Add your details below to get back into the app.</legend>
          </>
        )}
        {formDetails.map(({ img, ...props }) => (
          <InputWrapper key={props.id}>
            <label htmlFor={props.id}>{props.label}</label>
            <div>
              {img}
              <input {...props} />
            </div>
          </InputWrapper>
        ))}
        {isCreateAccount && (
          <InputWrapper>
            <label htmlFor="confirmPassword">Confirm password</label>
            <div>
              <IconPassword />
              <input
                type="password"
                id="confirmPassword"
                placeholder="At least 8 characters"
              />
            </div>
          </InputWrapper>
        )}
        <Btn
          label={isCreateAccount ? "Create new account" : "Login"}
          bg={({ theme }) => theme.colors.purple}
          color={({ theme }) => theme.colors.white}
          padding={"1.1rem 0"}
          margin={"3.2rem 0 0 0 "}
          onClick={handleLogin}
        />
        <p>
          {isCreateAccount
            ? "Already have an account?"
            : "Don't have an account?"}
        </p>
        <Btn
          label={isCreateAccount ? "Login" : "Create new account"}
          color={({ theme }) => theme.colors.purple}
          fontWeight={"200"}
          onClick={toggleCreateAccount}
          type={"button"}
        />
      </StyledForm>
    </Wrapper>
  );
};

export default LoginForm;
