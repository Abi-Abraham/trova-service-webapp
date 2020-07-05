import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Services from "./components/Services";

function App() {
  return (
    <div className="container-fluid p-0">
      <Header />
      <Services />
    </div>
  );
}

export default App;
