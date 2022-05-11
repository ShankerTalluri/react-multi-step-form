import React from "react";
import MaterialLayout from "./components/Layout/MaterialLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckoutPage from "./components/CheckoutPage";
// import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <div>
      <MaterialLayout>
        <CheckoutPage />
      </MaterialLayout>
    </div>
  );
}

export default App;
