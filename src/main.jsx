import React from "react";
import ReactDOM from "react-dom/client";
import App from "./base/apps/app.tsx";
import "./base/style/index.css";
import "./base/style/components.css";
// import "./base/style/lightColor.css";
// import "./base/style/darkColor.css";
import "./base/style/form.css";
import "./base/style/framework.css";
import "./base/style/responsive.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
