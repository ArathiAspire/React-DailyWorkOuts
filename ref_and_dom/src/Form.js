import React from "react";
import { useRef } from "react";

const Form = () => {
  const inputRef = useRef(null);
  const onHandleclick = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <h2>Focusing a text input</h2>
      <input ref={inputRef} />
      <button onClick={onHandleclick}>Focus the input</button>
    </>
  );
};

export default Form;
