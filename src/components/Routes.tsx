import { createBrowserRouter } from "react-router-dom";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

export default router;
