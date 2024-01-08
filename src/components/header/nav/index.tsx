import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../pages/routes";
import { Button, Flex } from "antd";
import { useAuthContext } from "../../authContext";

export default function Nav() {
  const { isAuth, setIsAuth } = useAuthContext();
  return (
    <nav>
      <Flex gap="middle">
        <Link to={ROUTES.HOME}>Главная</Link>
        <Link to={ROUTES.CONTACTS}>Контакты</Link>
        <Link to={ROUTES.FEEDBACK}>Обратная связь</Link>
        <Link to={ROUTES.ABOUTUS}>О нас</Link>
        {isAuth && <Link to={ROUTES.ACCOUNT}>Аккаунт</Link>}
        <Button type="primary" onClick={() => setIsAuth(!isAuth)}>
          {isAuth == true ? "Выход" : "Вход"}
        </Button>
      </Flex>
    </nav>
  );
}
