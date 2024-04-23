import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="http://dev-iq6y3e70pjokpq1f.us.auth0.com"
     clientId="BPpntyaOqSTwux1nD8fU7d2R5gUgagBb"
     authorizationParams={{
      redirect_uri: "https://elite-the-real-estate-company-bice.vercel.app"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
