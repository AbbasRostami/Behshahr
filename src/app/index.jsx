<<<<<<< HEAD
import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Landing } from '../screens/Landing'
import Routes from '../routes'
import { RouterProvider } from "react-router-dom";
=======
import { Landing } from "../screens/Landing";
import "./App.css";
>>>>>>> dcea426808fb559cc598e8e04a51fd76a936d8e8

function App() {
  // vv
  return (
    <>
      <RouterProvider router={Routes} />
    </>
  );
}

export default App;
