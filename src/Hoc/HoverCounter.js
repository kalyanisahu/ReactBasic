import { useState } from "react";
import UpdatedComponent from "./withCounter";
function HoverCounter(props) {
  //   const [counter, setCounter] = useState(0);
  //   const incrementCounter = () => {
  //     setCounter(counter + 1);
  //   };
  return (
    <button onMouseOver={props.incrementCounter}>
      {props.name}ON MOUSEHOVER {props.counter}
    </button>
    // <button onMouseOver={incrementCounter}>Clicked {counter}</button>
  );
}
export default UpdatedComponent(HoverCounter);
