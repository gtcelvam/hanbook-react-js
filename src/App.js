import BoundingClientRect from "./Notice/BoundingClientRect";
import HashExample from "./Notice/crypto";
import D3Component from "./Notice/d3";
import DangerouslySetInnerHTML from "./Notice/dangerouslySetInnerHTML";
import NavigatorThings from "./Notice/navigator";
import YupComponent from "./Notice/Packages/yup";
import RazorPayThings from "./Notice/razorPay";
import ReduxPersistComponent from "./Notice/reduxPersist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

export default function App() {
  return (
    <div>
      {/* <DangerouslySetInnerHTML /> */}
      {/* <NavigatorThings /> */}
      {/* <RazorPayThings /> */}
      {/* <D3Component /> */}
      {/* <HashExample /> */}
      {/* <BoundingClientRect /> */}
      {/* <YupComponent /> */}
      <ReduxPersistComponent/>
      <ToastContainer />
    </div>
  );
}
