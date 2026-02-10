import BookIcon from "../assets/BookOutlined.svg?react";
import StarIcon from "../assets/Star.svg?react";
import UserIcon from "../assets/UserOutlined.svg?react";
import CommonTable from "../components/CommonTable";
import StatBox from "../components/StatBox";

const medicalTrainers = [
  {
    title: "Total Trainers",
    stat: 4,
    subPara: "Professional staff",
    subParaBg: "text-blue-600",
    Icon: UserIcon,
    iconLines: "fill-green-500",
  },
  {
    title: "Active Trainers",
    stat: 3,
    subPara: "Currently teaching",
    subParaBg: "text-green-600",
    Icon: UserIcon,
    iconLines: "fill-green-500",
  },
  {
    title: "Avg Rating",
    stat: 4.7,
    subPara: "Trainer performance",
    subParaBg: "text-orange-600",
    Icon: StarIcon,
    iconLines: "fill-orange-500",
  },
  {
    title: "Total trainees",
    stat: 143,
    subPara: "Under guidance",
    subParaBg: "text-purple-600",
    Icon: BookIcon,
    iconLines: "fill-purple-500",
  },
];

const traineesDirectory = [
  {
    name: "Dr.Aisha Khan",
    email: "aisha.khan@email.com",
    branch: "Downtown Medical Center",
    course: "Advanced Cardiology",
    modules: "6/8 modules",
    trainer: "Dr. Lebron James",
    progress: "75%",
    status: "Active",
  },
  {
    name: "Dr.John smith",
    email: "john.smith@email.com",
    branch: "City General Hospital",
    course: "Emergency Medicine",
    modules: "4/8 modules",
    trainer: "Dr. Steph Curry",
    progress: "60%",
    status: "Active",
  },
  {
    name: "Dr.James Cameron",
    email: "james.cameron@email.com",
    branch: "Capital Health center",
    course: "Pediatric care",
    modules: "5/7 modules",
    trainer: "Dr. Leo Messi",
    progress: "100%",
    status: "Completed",
  },
  {
    name: "Dr.Tony stark",
    email: "tony.stark@email.com",
    branch: "Regional Medical Complex",
    course: "Basic surgery",
    modules: "2/7 modules",
    trainer: "Dr. Neymar",
    progress: "34%",
    status: "Dropped",
  },
];

function Trainers() {
  return (
    <div>
      <StatBox data={medicalTrainers} />
      <CommonTable title="Trainee Directory" data={traineesDirectory} />
    </div>
  );
}

export default Trainers;
