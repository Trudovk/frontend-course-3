import "./App.css";
import Header from "./components/header";
import MainRouter from "./pages/routes";
import { AuthProvider } from "./components/authContext";
import styled from "styled-components";

const StyledHeader = styled(Header)`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  padding: 8px 16px;
  background-color: var(--theme);
  color: var(--text);
`;

function App() {
  return (
    <AuthProvider>
      <StyledHeader />
      <MainRouter />
    </AuthProvider>
  );
}

export default App;
