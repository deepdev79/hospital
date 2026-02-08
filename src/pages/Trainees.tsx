import userLogo from "../assets/UserOutlined.svg?react";

const medicalTrainees = [
  {
    title: "Total Trainees",
    stat: 4,
    subPara: "Enrolled",
    subParaTextBg: "text-blue-600",
    Icon: userLogo,
    iconLines: "fill-green-500",
  },
  {
    title: "Active Training",
    stat: 2,
    subPara: "In progress",
    subParaTextBg: "text-green-600",
    Icon: userLogo,
    iconLines: "fill-green-500",
  },
  {
    title: "Completed",
    stat: 1,
    subPara: "Graduated",
    subParaTextBg: "text-blue-600",
    Icon: userLogo,
    iconLines: "fill-green-500",
  },
  {
    title: "Average Progress",
    stat: 65,
    subPara: "Completion rate",
    subParaTextBg: "text-green-600",
    Icon: userLogo,
    iconLines: "fill-green-500",
  },
];

function Trainees() {
  return <div>Trainees</div>;
}

export default Trainees;
