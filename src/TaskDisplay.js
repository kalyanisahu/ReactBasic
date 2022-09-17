import { useState } from "react";

function TaskDisplay() {
  const data = {
    tasks: [
      { id: 1, taskDesc: "Write Code", complete: true },
      { id: 2, taskDesc: "Complie Code", complete: true },
    ],
  };

  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <h1>Hello list of Tasks</h1>
      {data.tasks.map((task, index) => {
        return (
          <div key={task.id}>
            <div> ID: {task.id}</div>
            <div> Desc: {task.taskDesc}</div>
            <div> Complete: {String(toggle)}</div>
          </div>
        );
      })}
      <button onClick={handleToggle}>Show Change Complete Value</button>

      {toggle === false && (
        <h1>Hello Everyone (show only when complete is false)</h1>
      )}

      {toggle ? (
        <h1>Conditional Operator</h1>
      ) : (
        <h1>Conditional Operator false</h1>
      )}
    </div>
  );
}

export default TaskDisplay;
