import React from "react";
import ReactDOM from "react-dom/client";
// global styles
import GlobalCss from "./global.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalCss />
        <App />
    </React.StrictMode>
);
