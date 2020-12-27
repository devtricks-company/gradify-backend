import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AuthState from "./context/auth/AuthState";
import StudentState from "./context/student/StudentState";
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <StudentState>
        <App />
      </StudentState>
    </AuthState>
  </React.StrictMode>,
  document.getElementById("root")
);
