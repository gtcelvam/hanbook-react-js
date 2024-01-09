import { Route, Routes } from "react-router-dom";
import BoundingClientRect from "../Notice/BoundingClientRect";
import D3Component from "../Notice/d3";
import DangerouslySetInnerHTML from "../Notice/dangerouslySetInnerHTML";
import NavigatorThings from "../Notice/navigator";
import YupComponent from "../Notice/Packages/yup";
import RazorPayThings from "../Notice/razorPay";
import ReduxPersistComponent from "../Notice/reduxPersist";
import App from "../App";
import {
  BoundingClientRectRoute,
  D3ComponentRoute,
  DangerouslySetInnerHTMLRoute,
  NavigatorThingsRoute,
  RazorPayThingsRoute,
  ReduxPersistRoute,
  YupComponentRoute,
} from "../Constants";

const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path={ReduxPersistRoute} element={<ReduxPersistComponent />} />
      <Route path={BoundingClientRectRoute} element={<BoundingClientRect />} />
      <Route path={D3ComponentRoute} element={<D3Component />} />
      <Route
        path={DangerouslySetInnerHTMLRoute}
        element={<DangerouslySetInnerHTML />}
      />
      <Route path={NavigatorThingsRoute} element={<NavigatorThings />} />
      <Route path={YupComponentRoute} element={<YupComponent />} />
      <Route path={RazorPayThingsRoute} element={<RazorPayThings />} />
    </Routes>
  );
};

export default RouteComponent;
