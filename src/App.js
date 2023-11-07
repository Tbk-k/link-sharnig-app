import React, { useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import HomePage from "./pages/homePage/HomePage";
import ProtectedRoad from "./ utilitis/protectedRoad/ProtectedRoad";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoad
          isAutenticated={!!isAuthenticated}
          children={<HomePage />}
        />
      ),
      errorElement: <div>Not Found</div>,
    },
    {
      path: "/login",
      element: <LoginPage />,
      errorElement: <div>Not Found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
