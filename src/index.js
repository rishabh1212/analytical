import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig)
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

