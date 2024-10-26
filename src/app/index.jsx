import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Routes from "../routes";
import { RouterProvider } from "react-router-dom";

import { Landing } from "../screens/Landing";
import "./App.css";

function App() {
  // vv
  return (
    <>
      <RouterProvider router={Routes} />
    </>
  );
}

export default App;
