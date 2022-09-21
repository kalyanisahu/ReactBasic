import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.js";
import FetchData from "./FetchData/FetchData.js";
import ContextApi from "./ContextApi";

function Routing() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/fetch" element={<FetchData />} />
          <Route path="/" element={<App />} />
          <Route path="/contextapi" element={<ContextApi />} />
        </Routes>
      </div>
    </Router>
  );
}
export default Routing;
