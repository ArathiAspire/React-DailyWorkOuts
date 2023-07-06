import "./App.css";
import { createPortal } from "react-dom";
import NoPortalModal from "./NoPortalModal";
import PortalModal from "./PortalModal";
import { Profiler } from "react";

function App() {
  const onRender = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {
    alert(`Component ${id} rendered in ${actualDuration} ms`);
  };
  return (
    <>
      <h1>Portal</h1>
      <div style={{ border: "2px solid black" }}>
        <p>This is placed in the parent div</p>
        {createPortal(<p>This is placed in the doc body.</p>, document.body)}
      </div>
      <div>
        <Profiler id="NoPortalModal" onRender={onRender}>
          <NoPortalModal />
        </Profiler>
      </div>
      <div>
        <PortalModal />
      </div>
    </>
  );
}

export default App;
