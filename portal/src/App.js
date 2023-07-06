import "./App.css";
import { createPortal } from "react-dom";
import NoPortalModal from "./NoPortalModal";
import PortalModal from "./PortalModal";

function App() {
  return (
    <>
      <h1>Portal</h1>
      <div style={{ border: "2px solid black" }}>
        <p>This is placed in the parent div</p>
        {createPortal(
          <p>This is placed in the doc body.</p>
          , document.body)}
      </div>
      <div>
        <NoPortalModal/>
      </div>
      <div>
        <PortalModal/>
      </div>
    </>
  );
}

export default App;
