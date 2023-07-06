import React, { useState } from "react";
import Modal from "./Modal";

const NoPortalModal = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>Show modal without a portal</button>
      {show && (<Modal onClose={()=>setShow(false)}/>)}
    </div>
  );
};

export default NoPortalModal;
