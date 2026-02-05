import { NavLink, Outlet } from "react-router-dom";
import home from "../assets/house.svg";
import hBranch from "../assets/hospital.svg";
import traineesLogo from "../assets/BookOutlined.svg";
import trainersLogo from "../assets/UserOutlined.svg";
import scheduleLogo from "../assets/schedule.svg";
import courses from "../assets/BookFilled.svg";

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: home },
  { name: "Hospital Branches", path: "/hospitalbranch", icon: hBranch },
  { name: "Trainees", path: "/trainees", icon: traineesLogo },
  { name: "Courses", path: "/courses", icon: courses },
  { name: "Trainers", path: "/trainers", icon: trainersLogo },
  { name: "Schedule", path: "/schedule", icon: scheduleLogo },
];

function Home() {
  return (
    <div className=" grid grid-cols-6">
      <div className="col-span-1">
        <div className=" flex flex-col gap-4 border-r h-dvh border-borderOutline">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex py-2 px-3 gap-3 mx-2 my-1 rounded-2xl ${isActive ? "transition duration-75 ease-in bg-teal-600 text-white hover:bg-teal-700" : "bg-white text-charcoal hover:bg-gray-100"}`
              }
            >
              <div className="flex items-center">
                <img
                  src={item.icon}
                  alt={`${item.name} logo`}
                  className="h-5.5 w-6 object-contain"
                />
              </div>
              <p className="font-semibold text-sm ">{item.name}</p>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="col-span-5">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
