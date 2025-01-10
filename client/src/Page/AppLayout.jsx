import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <div className="flex w-full">
      <div className="h-screen bottom-0 sticky top-0 z-50">
          <Sidebar />
      </div>

      <div className="w-[100%]">
        <Header />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
