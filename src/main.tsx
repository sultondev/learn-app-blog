import React from "react";
import ReactDOM from "react-dom/client";

// Libraries dependencies
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// App component
import App from "./components/App/App.component";

// Style
import "./index.css";
import SignUp from "./components/Auth/SignUp.component";
import SignIn from "./components/Auth/SignIn.component";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="*" element={<App />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);
