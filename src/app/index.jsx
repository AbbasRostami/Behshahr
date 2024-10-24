import { ProgressBar } from "../components/common/ProgressBar";
import { RoutesApp } from "../routes";
import "./App.css";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
    <ProgressBar />
      <RouterProvider router={RoutesApp} />
    </>
  );
}

export default App;
