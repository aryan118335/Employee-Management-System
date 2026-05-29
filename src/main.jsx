import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // <-- Make sure this matches the file where you put @import "tailwindcss"
import AuthContext from "./context/AuthContext.jsx";
import TaskContext from "./context/TaskContext.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <AuthContext>
  //     <TaskContext>
  //       <App />
  //     </TaskContext>
  //   </AuthContext>

  <AuthContext>
      <App />
  </AuthContext>

  // </React.StrictMode>,
);
