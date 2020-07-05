import React from "react";
import "./App.scss";
import Header from "./components/Header";
import ProcessNav from "./components/ProcessNav";
import Services from "./components/Services";

function App() {
  return (
    <div className="container-fluid p-0">
      <Header />
      <ProcessNav />
      <Services />
    </div>
  );
}

export default App;
