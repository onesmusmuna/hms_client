import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Patient from "./page/Patient.tsx";
import Doctor from "./page/Doctor.tsx";
import RegisterPatient from "./page/RegisterPatient.tsx";
import RegisterDoctor from "./page/RegisterDoctor.tsx";
import LoginPatient from "./page/LoginPatient.tsx";
import LoginDoctor from "./page/LoginDoctor.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/patient/register",
    element: <RegisterPatient />,
  },
  {
    path: "/patient/login",
    element: <LoginPatient />,
  },
  {
    path: "/doctor/register",
    element: <RegisterDoctor />,
  },
  {
    path: "/doctor/login",
    element: <LoginDoctor />,
  },
  {
    path: "/doctor/register",
    element: <RegisterDoctor />,
  },
  {
    path: "/patient",
    element: <Patient />,
  },
  {
    path: "/doctor",
    element: <Doctor />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
