import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createServers } from "./pb";

function App() {
  useEffect(() => {
    createServers();
  }, []);

  return <></>;
}

export default App;
