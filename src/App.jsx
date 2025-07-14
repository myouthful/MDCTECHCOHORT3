// src/App.jsx
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import GetStarted from './pages/GetStarted';

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <GetStarted />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
