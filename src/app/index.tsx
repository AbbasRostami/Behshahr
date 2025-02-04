import "./App.css";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { ProgressBar } from "../components/common/ProgressBar";
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
