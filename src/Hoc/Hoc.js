import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
function Hoc() {
  return (
    <div>
      <ClickCounter />
      <br />
      <HoverCounter />
    </div>
  );
}

export default Hoc;
