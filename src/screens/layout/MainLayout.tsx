import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer } from "../../components/common/Footer";
import { Header } from "../../components/common/Header";

const MainLayout = () => {
  return (
    <>
      <div className="dark:bg-slate-900">
        <Header />
        <ScrollRestoration />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
