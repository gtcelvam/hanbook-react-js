import React from "react";
import CustomButton from "../mui/button";
import { useNavigate } from "react-router-dom";
import { handleRoute } from "../../Helpers";
import {
  BoundingClientRectRoute,
  D3ComponentRoute,
  DangerouslySetInnerHTMLRoute,
  NavigatorThingsRoute,
  RazorPayThingsRoute,
  ReduxPersistRoute,
  YupComponentRoute,
} from "../../Constants";
import { Component } from "./style";

const HomePage = () => {
  //constants
  const navigate = useNavigate();

  return (
    <Component>
      <CustomButton
        title="Redux Persist"
        onClick={() => handleRoute(navigate, ReduxPersistRoute)}
      />
      <CustomButton
        title="Bounding Client"
        onClick={() => handleRoute(navigate, BoundingClientRectRoute)}
      />
      <CustomButton
        title="D3 Component"
        onClick={() => handleRoute(navigate, D3ComponentRoute)}
      />
      <CustomButton
        title="Dangerously Set InnerHTML"
        onClick={() => handleRoute(navigate, DangerouslySetInnerHTMLRoute)}
      />
      <CustomButton
        title="Navigator Things"
        onClick={() => handleRoute(navigate, NavigatorThingsRoute)}
      />
      <CustomButton
        title="Yup Validation"
        onClick={() => handleRoute(navigate, YupComponentRoute)}
      />
      <CustomButton
        title="RazorPay"
        onClick={() => handleRoute(navigate, RazorPayThingsRoute)}
      />
    </Component>
  );
};

export default HomePage;
