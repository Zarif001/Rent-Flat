import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.scss";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
  <Router>
    <App />
  </Router>
);
