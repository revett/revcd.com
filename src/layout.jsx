import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="container font-roboto-slab leading-6 max-w-3xl mx-auto pb-16 pt-12 px-6 text-white w-full">
      <Outlet />
    </main>
  );
};

export default Layout;
