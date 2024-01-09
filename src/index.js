import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "./store/redux-persist";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RouteComponent from "./router";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <RouteComponent />
        </Router>
      </PersistGate>
    </Provider>
  </StrictMode>
);
