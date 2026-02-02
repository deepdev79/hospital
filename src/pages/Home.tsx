import { NavLink, Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="text-red-600 grid grid-cols-5">
      <div className="col-span-1">
        <ul>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/hospitalbranch">Hospital Branches</NavLink>
          </li>
          <li>
            <NavLink to="/trainees">Trainees</NavLink>
          </li>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink to="/trainers">Trainers</NavLink>
          </li>
          <li>
            <NavLink to="/schedule">Schedule</NavLink>
          </li>
        </ul>
      </div>
      <div className="col-span-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
