import React from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import Home from "../home";
import AboutUs from "../aboutus";
import Contacts from "../contacts";
import Feedback from "../feedback";
import Account from "../account";
import { useAuthContext } from "../../components/authContext";
import Pdf from "../pdf";
import DynamicPagination from "../dynamicPagination";

export const ROUTES = {
  HOME: "/",
  ABOUTUS: "/aboutus",
  CONTACTS: "/contacts",
  FEEDBACK: "/feedback",
  ACCOUNT: "/account",
  PDF: "/pdf",
  DYNPAHINATION: "/dynpagination",
};

const MainRouter = () => {
  const { isAuth } = useAuthContext();
  const basedPath: RouteObject[] = [
    { path: ROUTES.HOME, element: <Home /> },
    { path: ROUTES.ABOUTUS, element: <AboutUs /> },
    { path: ROUTES.CONTACTS, element: <Contacts /> },
    { path: ROUTES.FEEDBACK, element: <Feedback /> },
    { path: ROUTES.PDF, element: <Pdf /> },
    { path: ROUTES.DYNPAHINATION, element: <DynamicPagination /> },
    { path: "*", element: <Navigate to={"/"} replace /> },
  ];

  const authPath: RouteObject[] = [
    { path: ROUTES.ACCOUNT, element: <Account /> },
  ];

  const resultPaths: RouteObject[] = basedPath;

  if (isAuth) {
    resultPaths.push(...authPath);
  }
  return useRoutes(resultPaths);
};

export default MainRouter;
