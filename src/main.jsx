import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthContext, { AuthContextProvider} from "./context/AuthContext";
import ReactDOM from "react-dom";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// initialize and mount REACT application to the DOM
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      
        <App />
     
    </AuthContextProvider>
  </StrictMode>,
  document.getElementById("root"),
);
