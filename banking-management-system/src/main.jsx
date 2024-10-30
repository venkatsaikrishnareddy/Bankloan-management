import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // Ensure you have this CSS file for global styles

// Get the root element from the HTML
const rootElement = document.getElementById("root");

if (rootElement) {
  // Create a root and render the App component inside StrictMode
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
