import { StrictMode } from "react";
import { Provider } from "react-redux";

import { App } from "@/app/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { createRoot } from "react-dom/client";

import "@/styles/index.scss";
import "@fontsource/inter/500.css";

import { store } from "./app/store";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider
        clientId={
          "662563569216-fdvgo7rc55gfg194mu47kqnqhtg9nt42.apps.googleusercontent.com"
        }
      >
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </StrictMode>,
);
