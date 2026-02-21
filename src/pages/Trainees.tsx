import UserLogo from "../assets/UserOutlined.svg?react";
import BookIcon from "../assets/BookOutlined.svg?react";
import BadgeIcon from "../assets/Badge.svg?react";
import GraduateIcon from "../assets/Graduate.svg?react";
import StatBox from "../components/StatBox";

import Table from "../components/Table";
import CellText from "../components/TableComponents/CellText";
import CommonHeading from "../components/CommonHeading";
import Actions from "../components/TableComponents/Actions";
import ProgressBar from "../components/TableComponents/ProgressBar";
import { createColumnHelper, type ColumnDef } from "@tanstack/react-table";
import TextDecor from "../components/TableComponents/Status";

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
    iconLines: "fill-blue-500",
  },
  {
    title: "Average Progress",
    stat: 65,
    subPara: "Completion rate",
    subParaBg: "text-green-600",
    Icon: BookIcon,
    iconLines: "fill-orange-500",
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
    cell: (info) => <TextDecor input={info.getValue()} />,
  }),

  columnHelper.display({
    id: "actions",
    header: "Actions",
    cell: () => <Actions />,
  }),
];

function Trainees() {
  return (
    <div className="px-2 bg-gray-50 min-h-dvh">
      <CommonHeading
        title="Medical Trainees"
        summary=" Manage professionals delivering medical training across your network"
        buttonText="Add Trainee"
      />
      <StatBox data={medicalTrainees} />
      <Table<tData>
        title="Trainee Directory (4)"
        tableData={traineesDirectory}
        columns={columns}
      />
    </div>
  );
}

export default Trainees;
