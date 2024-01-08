import "./App.css";
import Header from "./components/header";
import MainRouter from "./pages/routes";
import { AuthProvider } from "./components/authContext";

function App() {
  return (
    <AuthProvider>
      <Header />
      <MainRouter />
    </AuthProvider>
  );
}

export default App;
