import React from 'react';
import ReactDOM from 'react-dom/client'; 
import {Provider} from 'react-redux';
import { combineReducers } from 'redux'
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import thunkMiddleWare from 'redux-thunk';
import { searchRobots, setTextReducer, setCounterReducer, requestRobots} from "./reducers";


const logger = createLogger();
//This is the new style to create store with react-toolkit. Older createStore has been deprecated
const rootReducer = combineReducers({searchRobots, requestRobots})

const store = configureStore({
  reducer: rootReducer,
  // reducer: setTextReducer,
  // reducer: setCounterReducer,
//  This is the new style to add Middleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleWare, logger),
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
    <React.StrictMode>
      <App/>
      </React.StrictMode>
    </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
