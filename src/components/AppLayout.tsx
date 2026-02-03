import { Outlet } from "react-router-dom";

import logo from "../assets/layout-dashboard.svg";

function AppLayout() {
  return (
    <>
      <div className="flex justify-between border-y border-gray-300 py-2 px-5">
        <div className="flex gap-3 items-stretch">
          <div className="flex items-center">
            <img
              src={logo}
              alt="company logo"
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col justify-center py-0.5">
            <h1 className="text-xl font-semibold leading-tight">
              Hospital Data Management
            </h1>
            <p className="text-gray-700 leading-tight">
              Healthcare Analytics Dashboard
            </p>
          </div>
        </div>
        <div>
          <p className="font-semibold">Dr.Sarah Johnson</p>
          <p className="text-sm text-gray-700">Admin</p>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default AppLayout;
