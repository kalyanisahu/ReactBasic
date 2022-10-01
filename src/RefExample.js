import * as React from "react";
import ReactDOM from "react-dom";

export default function RefExample() {
  const ref = React.useRef();

  function focus() {
    ref.current.focus();
  }

  //   document.getElementById('myInput).focus()

  return (
    <div className="App">
      <input ref={ref} placeholder="my input" />
      <button onClick={focus}>Focus</button>
    </div>
  );
}
