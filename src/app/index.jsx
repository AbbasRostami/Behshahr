import { ProgressBar } from "../components/common/ProgressBar";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import RoutesApp from "../routes";

function App() {
  return (
    <>
      <ProgressBar />
      <RouterProvider router={RoutesApp} />
    </>
  );
}

export default App;
