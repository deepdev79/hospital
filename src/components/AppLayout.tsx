import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <div>
        <div>
          <p>Hospital Data Management</p>
          <p>Healthcare Analytics Dashboard</p>
        </div>
        <div>
          <p>Dr.Sarah Johnson</p>
          <p>Admin</p>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default AppLayout;
