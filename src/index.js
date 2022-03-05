import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

Amplify.configure(awsconfig)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

