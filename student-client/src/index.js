import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./Reducer/index";
import rootSaga from "./Saga/index";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);
reportWebVitals();
