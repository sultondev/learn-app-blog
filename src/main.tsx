import React from "react";
import ReactDOM from "react-dom/client";

// Libraries dependencies
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// App component
import App from "./components/App/App.component";

// Style
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);
