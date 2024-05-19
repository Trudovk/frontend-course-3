import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../pages/routes";
import { Button } from "antd";
import { useAuthContext } from "../../authContext";
import styled from "styled-components";

const ButtonStyle = styled(Button)`
  &.ant-btn-default {
    background-color: var(--theme);
    border: none;
    color: var(--text);
  }
  &:focus {
    border: none;
  }
  &:active {
    border: none;
  }
`;

type StyledNavProps = {
  width?: string;
};

const StyledNav = styled.nav<StyledNavProps>`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: ${({ width }) => width || "auto"};
`;

const StyledLink = styled(Link)`
  color: var(--text);
  text-decoration: none;
`;

export default function Nav() {
  const { isAuth, setIsAuth } = useAuthContext();
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("light");

  const changeTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setCurrentTheme(newTheme);
  };
  return (
    <StyledNav width="700px">
      <StyledLink to={ROUTES.HOME}>Главная</StyledLink>
      <StyledLink to={ROUTES.CONTACTS}>Контакты</StyledLink>
      <StyledLink to={ROUTES.FEEDBACK}>Обратная связь</StyledLink>
      <StyledLink to={ROUTES.ABOUTUS}>О нас</StyledLink>
      {isAuth && <StyledLink to={ROUTES.ACCOUNT}>Аккаунт</StyledLink>}
      <StyledLink to={ROUTES.PDF}>PDF</StyledLink>
      <StyledLink to={ROUTES.DYNPAHINATION}>Д. Пагинация</StyledLink>
      <ButtonStyle
        icon={
          currentTheme === "light" ? (
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="--theme"
              strokeWidth="2"
              fill="!--theme"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="var(--text)"
              strokeWidth="2"
              fill="var(--theme)"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          )
        }
        onClick={() => {
          changeTheme();
        }}
      ></ButtonStyle>
      <Button type="primary" onClick={() => setIsAuth(!isAuth)}>
        {isAuth == true ? "Выход" : "Вход"}
      </Button>
    </StyledNav>
  );
}
