import BookIcon from "../assets/BookOutlined.svg?react";
import StarIcon from "../assets/Star.svg?react";
import UserIcon from "../assets/UserOutlined.svg?react";

import StatBox from "../components/StatBox";

import Table from "../components/Table";
import CellText from "../components/TableComponents/CellText";
import { createColumnHelper, type ColumnDef } from "@tanstack/react-table";
import Actions from "../components/TableComponents/Actions";
import TextDecor from "../components/TableComponents/Status";
import CommonHeading from "../components/CommonHeading";
import Rating from "../components/TableComponents/Rating";

export interface tFData {
  name: string;
  experience: number;
  branch: string;
  specialty: string;
  courses: string[];
  trainees: number;
  rating: number;
  status: string[];
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

const trainingFaculty: tFData[] = [
  {
    name: "Dr.Lebron James",
    experience: 12,
    specialty: "Cardiology",
    branch: "Downtown Medical Center",
    courses: ["Advanced Cardiology", "Basic ECG Reading"],
    trainees: 45,
    rating: 4.8,
    status: ["Active", "Full-time"],
  },
  {
    name: "Dr.Steph Curry",
    experience: 9,
    specialty: "Emergency Medicine",
    branch: "City General Hospital",
    courses: ["Emergency Medicine", "Trauma Care"],
    trainees: 32,
    rating: 4.6,
    status: ["Active", "Part-time"],
  },
  {
    name: "Dr.Leo Messi",
    experience: 15,
    specialty: "Pediatrics",
    branch: "Capital Health Center",
    courses: ["Pediatric Care", "Child Development"],
    trainees: 38,
    rating: 4.9,
    status: ["Active", "Full-time"],
  },
  {
    name: "Dr.Neymar",
    experience: 7,
    specialty: "Surgery",
    branch: "Regional Medical Complex",
    courses: ["Basic Surgery", "Surgical Techniques"],
    trainees: 28,
    rating: 4.3,
    status: ["On Leave", "Unavailable"],
  },
];

const columnHelper = createColumnHelper<tFData>();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const columns: ColumnDef<tFData, any>[] = [
  columnHelper.accessor(
    (row) => ({ name: row.name, experience: row.experience }),
    {
      id: "trainer",
      header: "Trainer",
      cell: (info) => (
        <CellText
          primary={info.getValue().name}
          secondary={`${info.getValue().experience} years experience`}
        />
      ),
    },
  ),

  columnHelper.accessor("specialty", {
    header: "Specialty",
    cell: (info) => <TextDecor input={info.getValue()} />,
  }),

  columnHelper.accessor("branch", {
    header: "Branch",
    cell: (info) => <p> {info.getValue()} </p>,
  }),

  columnHelper.accessor("courses", {
    header: "Courses",
    cell: (info) => (
      <>
        {info.getValue().map((course: string, index: number) => (
          <p key={index} className="text-sm text-charcoal">
            {course}
          </p>
        ))}
      </>
    ),
  }),

  columnHelper.accessor("trainees", {
    header: "Trainees",
    cell: (info) => <CellText primary={info.getValue()} secondary="active" />,
  }),
  columnHelper.accessor("rating", {
    header: "Rating",
    cell: (info) => <Rating rating={info.getValue()} />,
  }),

  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => (
      <div className="flex">
        {info.getValue()?.map((status: string, index: number) => (
          <TextDecor key={index} input={status} />
        ))}
      </div>
    ),
  }),

  columnHelper.display({
    id: "actions",
    header: "Actions",
    cell: () => <Actions />,
  }),
];
function Trainers() {
  return (
    <div className="px-2 bg-gray-50 min-h-dvh">
      <CommonHeading
        title="Medical Trainers"
        summary="Manage professionals delivering medical training across your network"
        buttonText="Add Trainer"
      />
      <StatBox data={medicalTrainers} />
      <Table<tFData>
        title="Trainee Directory (4)"
        tableData={trainingFaculty}
        columns={columns}
      />
    </div>
  );
}

export default Trainers;
