import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import FollowCursor from "./components/core/cursor.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FollowCursor />
    <App />
  </StrictMode>,
);
