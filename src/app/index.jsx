import { RoutesApp } from "../routes";
import "./App.css";
import { RouterProvider } from "react-router-dom";

function App() {

  return (
    <>
      <RouterProvider router={RoutesApp} />
    </>
  );
}

export default App;
