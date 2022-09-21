import { useContext, useState, createContext } from "react";
const CountContext = createContext();

// Now count context only worries about count!
function useCountContext() {
  const context = useContext(CountContext);
  if (!context)
    throw new Error("useCountContext must be used within CountProvider!");
  return context;
}

function CountProvider(props) {
  const [count, setCount] = useState(0);
  const value = { count, setCount };
  return <CountContext.Provider value={value} {...props} />;
}

// And message context only worries about message!
const MessageContext = createContext();

function useMessageContext() {
  const context = useContext(MessageContext);
  if (!context)
    throw new Error("useMessageContext must be used within MessageProvider!");
  return context;
}

function MessageProvider(props) {
  const [message, setMessage] = useState("Hello from Context!");
  const value = { message, setMessage };
  return <MessageContext.Provider value={value} {...props} />;
}

function Message() {
  const { message } = useMessageContext();
  const getColor = () => Math.floor(Math.random() * 255);
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  };
  return (
    <div>
      <h4 style={style}>{message}</h4>
    </div>
  );
}

function Count() {
  const { count, setCount } = useCountContext();
  return (
    <div>
      <h3>Current count from context: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function ContextApi() {
  return (
    <div>
      <h2>No Unnecessary Re-renders! 😎</h2>
      <MessageProvider>
        <Message />
        <Message />
        <Message />
      </MessageProvider>
      <CountProvider>
        <Count />
      </CountProvider>
    </div>
  );
}
export default ContextApi;
