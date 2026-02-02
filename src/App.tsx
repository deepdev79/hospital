import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import Trainees from "./pages/Trainees";
import Courses from "./pages/Courses";
import Schedule from "./pages/Schedule";
import HospitalBranches from "./pages/HospitalBranches";
import Trainers from "./pages/Trainers";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          {
            path: "hospitalbranch",
            element: <HospitalBranches />,
          },
          { path: "trainees", element: <Trainees /> },
          {
            path: "courses",
            element: <Courses />,
          },
          {
            path: "trainers",
            element: <Trainers />,
          },
          {
            path: "schedule",
            element: <Schedule />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
