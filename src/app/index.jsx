import { Landing } from "../screens/Landing";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import RoutesApp from "./../routes"

function App() {

  return (
    <>
      <RouterProvider router={RoutesApp} />
    </>
  );
}

export default App;
