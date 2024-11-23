import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Routes from "../routes";
import { RouterProvider } from "react-router-dom";

import { Landing } from "../screens/Landing";
import "./App.css";
import RoutesApp from "../routes";

function App() {
  return (
    <>
      {/* <ProgressBar /> */}
      <RouterProvider router={RoutesApp} />
    </>
  );
}

export default App;
