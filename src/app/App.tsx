import { RouterProvider } from "react-router-dom";
import { router } from "./route/router";
import "./App.css"

export const App = () => {
  return <RouterProvider router={router} />;
};
