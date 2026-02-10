import ClockIcon from "../assets/ClockCircleOutlined.svg?react";
import LocationIcon from "../assets/LocationOutline.svg?react";
import UserIcon from "../assets/UserOutlined.svg?react";
import ScheduleIcon from "../assets/ScheduleOutlined.svg?react";
import StatBox from "../components/StatBox";

const trainingSchedule = [
  {
    title: "Today's Sessions",
    stat: 4,
    subPara: "2 completed",
    subParaBg: "text-green-600",
    Icon: ScheduleIcon,
    iconLines: "fill-green-500",
  },
  {
    title: "This Week",
    stat: 18,
    subPara: "Total Sessions",
    subParaBg: "text-blue-600",
    Icon: ClockIcon,
    iconLines: "fill-blue-500",
  },
  {
    title: "Active Trainers",
    stat: 12,
    subPara: "Teaching today",
    subParaBg: "text-purple-600",
    Icon: UserIcon,
    iconLines: "fill-purple-500",
  },
  {
    title: "Utilization",
    stat: "85%",
    subPara: "Room capacity",
    subParaBg: "text-orange-600",
    Icon: LocationIcon,
    iconLines: "fill-orange-500",
  },
];

function Schedule() {
  return (
    <div>
      <StatBox data={trainingSchedule} />
    </div>
  );
}

export default Schedule;
