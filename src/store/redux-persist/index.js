import { createStore, combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import loginReducer from "./loginReducer";

const rootReducer = {
  login: loginReducer,
};

const config = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const reducers = combineReducers(rootReducer);
const persistedReducer = persistReducer(config, reducers);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const persistor = persistStore(store);

export { store, persistor };
