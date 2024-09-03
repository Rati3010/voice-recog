import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChatProvider } from "./context/chatContext";

createRoot(document.getElementById("root")).render(
  <>
    <ChatProvider>
      <App />
    </ChatProvider>
  </>
);
