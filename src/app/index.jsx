import { RoutesApp } from "../routes";
import "./App.css";
import { RouterProvider } from "react-router-dom";

function App() {
  // vv
  return (
    <>
      <RouterProvider router={RoutesApp} />
    </>
  );
}

export default App;
