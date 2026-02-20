import BookIcon from "../assets/BookOutlined.svg?react";
import StarIcon from "../assets/Star.svg?react";
import UserIcon from "../assets/UserOutlined.svg?react";
import PencilIcon from "../assets/Pencil.svg?react";
import BasketIcon from "../assets/Basket.svg?react";
import EyeIcon from "../assets/Eye.svg?react";
import Plus from "../assets/PlusOutlined.svg";

import StatBox from "../components/StatBox";

import Table from "../components/Table";
import CellText from "../components/TableComponents/CellText";
import ProgressBar from "../components/TableComponents/ProgressBar";
import { createColumnHelper, type ColumnDef } from "@tanstack/react-table";
import Status from "../components/TableComponents/Status";

export interface tData {
  name: string;
  email: string;
  branch: string;
  course: string;
  modules: string;
  trainer: string;
  progress: string;
  status: "Active" | "Completed" | "Dropped";
}

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

const traineesDirectory: tData[] = [
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
const ActionIcons = [PencilIcon, BasketIcon, EyeIcon];

const columnHelper = createColumnHelper<tData>();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const columns: ColumnDef<tData, any>[] = [
  columnHelper.accessor((row) => ({ name: row.name, email: row.email }), {
    id: "traineeInfo",
    header: "Trainee",
    cell: (info) => (
      <CellText
        primary={info.getValue().name}
        secondary={info.getValue().email}
      />
    ),
  }),

  columnHelper.accessor("branch", {
    header: "Branch",
    cell: (info) => <p className="text-gray-600">{info.getValue()}</p>,
  }),
  columnHelper.accessor(
    (row) => ({ course: row.course, modules: row.modules }),
    {
      id: "courseInfo",
      header: "Course",
      cell: (info) => (
        <CellText
          primary={info.getValue().course}
          secondary={info.getValue().modules}
        />
      ),
    },
  ),

  columnHelper.accessor("trainer", {
    header: "Trainer",
    cell: (info) => <p>{info.getValue()}</p>,
  }),

  columnHelper.accessor(
    (row) => ({ progress: row.progress, status: row.status }),
    {
      id: "progressStatus",
      header: "Progress",
      cell: (info) => (
        <ProgressBar
          progress={info.getValue().progress}
          status={info.getValue().status}
        />
      ),
    },
  ),

  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => <Status status={info.getValue()} />,
  }),

  columnHelper.display({
    id: "actions",
    header: "Actions",
    cell: () => (
      <div className="flex gap-2">
        {ActionIcons.map((IconItem, i) => (
          <IconItem key={i} className="w-5 h-5 cursor-pointer" />
        ))}
      </div>
    ),
  }),
];
function Trainers() {
  return (
    <div className="px-2 bg-gray-50 min-h-dvh">
      <div className="flex justify-between px-2 py-9">
        <div>
          <h1 className="text-2xl">Medical Trainers</h1>
          <p className="text-charcoal">
            Manage professionals delivering medical training across your network
          </p>
        </div>
        <button className="flex px-2 gap-2 items-center bg-teal-700 rounded-xl">
          <img src={Plus} alt="plus" className="h-5 w-5" />
          <p className="text-white font-medium text-sm ">Add Trainer</p>
        </button>
      </div>
      <StatBox data={medicalTrainers} />
      <Table<tData>
        title="Trainee Directory (4)"
        tableData={traineesDirectory}
        columns={columns}
      />
    </div>
  );
}

export default Trainers;
