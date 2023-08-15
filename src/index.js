import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { DataContextProvider } from "./components/DataContextProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 3
  <DataContextProvider>

    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DataContextProvider>

);
