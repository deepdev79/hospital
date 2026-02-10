import BookLogo from "../assets/BookOutlined.svg?react";
import Clock from "../assets/ClockCircleOutlined.svg?react";
import UserLogo from "../assets/UserOutlined.svg?react";
import Star from "../assets/Star.svg?react";
import StatBox from "../components/StatBox";

const medicalTrainingCourses = [
  {
    title: "Total Trainees",
    stat: 4,
    subPara: "Available  programs",
    subParaBg: "text-blue-600",
    Icon: BookLogo,
    iconLines: "fill-green-700",
  },
  {
    title: "Active Courses",
    stat: 2,
    subPara: "Currently running",
    subParaBg: "text-green-600",
    Icon: Clock,
    iconLines: "fill-green-500",
  },
  {
    title: "Total Enrollments",
    stat: 90,
    subPara: "Across all courses",
    subParaBg: "text-purple-600",
    Icon: UserLogo,
    iconLines: "fill-purple-500",
  },
  {
    title: "Avg Rating",
    stat: 4.7,
    subPara: "Course satisfaction",
    subParaBg: "text-orange-600",
    Icon: Star,
    iconLines: "fill-orange-500",
  },
];

function Courses() {
  return (
    <div>
      <StatBox data={medicalTrainingCourses} />
    </div>
  );
}

export default Courses;
