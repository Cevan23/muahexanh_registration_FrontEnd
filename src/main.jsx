import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "./store/Provider.jsx";
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <App />
      </CookiesProvider>
    </Provider>
  </React.StrictMode>
);
