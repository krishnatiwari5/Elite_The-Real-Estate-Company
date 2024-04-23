import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-p1hfcojayohgn3gf.us.auth0.com"
     clientId="jYuIB1Iw6fHskC5eFK0lIXJuI7VlDjub"
     authorizationParams={{
      redirect_uri: "https://elite-the-real-estate-company-pi.vercel.app"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
