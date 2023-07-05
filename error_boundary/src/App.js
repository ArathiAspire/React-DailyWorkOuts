import "./App.css";
import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function App() {
  return (
    <>
      <h1>Welcome to my App</h1>
     <ErrorBoundary>
      <ComponentA/>
      <ComponentB/>
     </ErrorBoundary>
    </>
  );
}

export default App;
