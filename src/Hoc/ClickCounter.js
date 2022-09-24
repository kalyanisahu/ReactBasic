import { useState } from "react";
import UpdatedComponent from "./withCounter";

function ClickCounter(props) {
  /*initally we have used duplicate the counter value, incrementcounter*/
  //   const [counter, setCounter] = useState(0);
  //   const incrementCounter = () => {
  //     setCounter(counter + 1);
  //   };
  return (
    /* we are getting props from HOC */
    <button onClick={props.incrementCounter}>
      {props.name}Clicked {props.counter}
    </button>
    // <button onClick={incrementCounter}>Clicked {counter}</button>
  );
}
export default UpdatedComponent(ClickCounter);
