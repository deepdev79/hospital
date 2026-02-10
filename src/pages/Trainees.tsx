import UserLogo from "../assets/UserOutlined.svg?react";
import BookIcon from "../assets/BookOutlined.svg?react";
import BadgeIcon from "../assets/Badge.svg?react";
import GraduateIcon from "../assets/Graduate.svg?react";
import StatBox from "../components/StatBox";
import CommonTable from "../components/CommonTable";

const medicalTrainees = [
  {
    title: "Total Trainees",
    stat: 4,
    subPara: "Enrolled",
    subParaBg: "text-blue-600",
    Icon: GraduateIcon,
    iconLines: "fill-green-500",
  },
  {
    title: "Active Training",
    stat: 2,
    subPara: "In progress",
    subParaBg: "text-green-600",
    Icon: UserLogo,
    iconLines: "fill-green-500",
  },
  {
    title: "Completed",
    stat: 1,
    subPara: "Graduated",
    subParaBg: "text-blue-600",
    Icon: BadgeIcon,
    iconLines: "fill-green-500",
  },
  {
    title: "Average Progress",
    stat: 65,
    subPara: "Completion rate",
    subParaBg: "text-green-600",
    Icon: BookIcon,
    iconLines: "fill-green-500",
  },
];

function Trainees() {
  return (
    <div>
      <StatBox data={medicalTrainees} />
    </div>
  );
}

export default Trainees;
