import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import SideBar from "../ui/SideBar";

// eslint-disable-next-line react/prop-types
function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[16rem_1fr] h-svh">
      <Header />
      <main className="p-8 pl-12 bg-nature1">
        <Outlet />
      </main>
      <SideBar />
    </div>
  );
}

export default AppLayout;
