import React from "react";
import "@fontsource/fira-code/300.css";
import "@fontsource/fira-code/400.css";
import "@fontsource/fira-code/500.css";
import "@fontsource/fira-code/600.css";
import "@fontsource/fira-code/700.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CustomThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </React.StrictMode>
);
