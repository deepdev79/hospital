import bookLogo from "../assets/BookOutlined.svg?react";
import clock from "../assets/ClockCircleOutlined.svg?react";
import userLogo from "../assets/UserOutlined.svg?react";
import star from "../assets/Star.svg?react";

const medicalTrainingCourses = [
  {
    title: "Total Branches",
    stat: 4,
    subPara: "Available  programs",
    subParaTextBg: "text-blue-600",
    Icon: bookLogo,
    iconLines: "fill-green-700",
  },
  {
    title: "Active Courses",
    stat: 2,
    subPara: "Currently running",
    subParaTextBg: "text-green-600",
    Icon: clock,
    iconLines: "fill-green-500",
  },
  {
    title: "Total Enrollments",
    stat: 90,
    subPara: "Across all courses",
    subParaTextBg: "text-purple-600",
    Icon: userLogo,
    iconLines: "fill-purple-500",
  },
  {
    title: "Avg Rating",
    stat: 4.7,
    subPara: "Course satisfaction",
    subParaTextBg: "text-orange-600",
    Icon: star,
    iconLines: "fill-orange-500",
  },
];

function Courses() {
  return <div>Courses</div>;
}

export default Courses;
