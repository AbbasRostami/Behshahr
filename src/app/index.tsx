import "./App.css";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { ProgressBar } from "../components/common/ProgressBar";
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
