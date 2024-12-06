import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Routes from "../routes";
import { RouterProvider } from "react-router-dom";

import { Landing } from "../screens/Landing";
import "./App.css";
import RoutesApp from "../routes";
import ProfileProvider from "../context/ProfileProvider";

function App() {
  return (
    <>
      <ProfileProvider>
        <ProgressBar />
        <RouterProvider router={RoutesApp} />
      </ProfileProvider>
    </>
  );
}

export default App;
