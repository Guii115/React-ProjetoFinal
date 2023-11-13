import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { FocusProvider } from "./hooks/focus.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FocusProvider>
      <App />
    </FocusProvider>
  </React.StrictMode>
)
