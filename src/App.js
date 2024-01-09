import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import RouteComponent from "./router";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/sections";
import ReduxPersistComponent from "./Notice/reduxPersist";

export default function App() {
  return (
    <div className="app">
      <HomePage />
      <ToastContainer />
    </div>
  );
}
