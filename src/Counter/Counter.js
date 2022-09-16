import { useEffect, useState } from "react";

function Counter(props) {
  const [counter, setcounterValue] = useState(props.counterValue);
  console.log("props222", props);
  useEffect(() => {
    setcounterValue(props.counterValue);
  }, [props.counterValue]);

  return <div>The Updated Counter Value{counter}</div>;
}

export default Counter;
