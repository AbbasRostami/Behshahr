import "./App.css";
import { RouterProvider } from "react-router-dom";
import "./App.css";
// import { ProgressBar } from "../components/common/ProgressBar";
import RoutesApp from "../routes";
import { ThemeProvider } from "../context/ThemeContext";

function App() {
  return (
    <>
        {/* <ProgressBar /> */}
      <ThemeProvider>
        <RouterProvider router={RoutesApp} />
      </ThemeProvider>
    </>
  );
}

export default App;
