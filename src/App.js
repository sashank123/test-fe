import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Login from "./routes/login";
import Tasks from "./routes/tasks";

const PrivateRoute = ({ children }) => {
  return localStorage.getItem("accessToken") ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};

const Mylayout = () => {
  return <Outlet />;
};
const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    children: [
      {
        element: <Tasks />,
        path: "/",
      },
    ],
    element: (
      <PrivateRoute>
        <Mylayout />
      </PrivateRoute>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
