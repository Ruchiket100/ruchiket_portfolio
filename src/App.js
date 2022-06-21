import React, { useState } from "react";

// Styles
import "./styles/main.css";
// components
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="App" data-theme={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <Home />
    </div>
  );
}

export default App;
