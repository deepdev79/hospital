import BookLogo from "../assets/BookOutlined.svg?react";
import Clock from "../assets/ClockCircleOutlined.svg?react";
import UserLogo from "../assets/UserOutlined.svg?react";
import Star from "../assets/Star.svg?react";
import StatBox from "../components/StatBox";
import CommonHeading from "../components/CommonHeading";

import { createColumnHelper, type ColumnDef } from "@tanstack/react-table";
import Actions from "../components/TableComponents/Actions";
import CellText from "../components/TableComponents/CellText";
import Table from "../components/Table";
import TextDecor from "../components/TableComponents/Status";
import Rating from "../components/TableComponents/Rating";

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

interface courses {
  name: string;
  sessions: string;
  duration: string;
  mode: string;
  enrollments: number;
  trainers: string[];
  rating: number;
  status: string;
}

const courses: courses[] = [
  {
    name: "Advanced Cardiology",
    sessions: "16 sessions",
    duration: "8 weeks",
    mode: "Hybrid",
    enrollments: 24,
    trainers: ["Dr. Lebron James", "Dr. Steph Curry"],
    rating: 4.2,
    status: "Active",
  },
  {
    name: "Emergency Medicine",
    sessions: "18 sessions",
    duration: "6 weeks",
    mode: "On-site",
    enrollments: 27,
    trainers: ["Dr. Leo Messi", "Dr. Neymar"],
    rating: 4.5,
    status: "Active",
  },
  {
    name: "Pediatric Care",
    sessions: "20 sessions",
    duration: "10 weeks",
    mode: "Online",
    enrollments: 32,
    trainers: ["Dr. Roger Fedrer", "Dr. Nadal"],
    rating: 4.7,
    status: "Completed",
  },
  {
    name: "Basic Surgery",
    sessions: "24 sessions",
    duration: "12 weeks",
    mode: "Hybrid",
    enrollments: 24,
    trainers: ["Dr. Pep Guardiola"],
    rating: 4.2,
    status: "Pending",
  },
];

const columnHelper = createColumnHelper<courses>();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const columns: ColumnDef<courses, any>[] = [
  columnHelper.accessor((row) => ({ name: row.name, sessions: row.sessions }), {
    id: "course",
    header: "Course",
    cell: (info) => (
      <CellText
        primary={info.getValue().name}
        secondary={info.getValue().sessions}
      />
    ),
  }),

  columnHelper.accessor("duration", {
    header: "Duration",
    cell: (info) => <p className="text-gray-600">{info.getValue()}</p>,
  }),
  columnHelper.accessor("mode", {
    header: "Mode",
    cell: (info) => <TextDecor input={info.getValue()} />,
  }),
  columnHelper.accessor("enrollments", {
    header: "Enrollments",
    cell: (info) => <CellText primary={info.getValue()} secondary="enrolled" />,
  }),

  columnHelper.accessor("trainers", {
    header: "Trainers",
    cell: (info) => (
      <>
        {info.getValue()?.map((trainer, index) => (
          <p key={index} className="text-sm">
            {trainer}
          </p>
        ))}
      </>
    ),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => <TextDecor input={info.getValue()} />,
  }),
  columnHelper.accessor("rating", {
    header: "Rating",
    cell: (info) => <Rating rating={info.getValue()} />,
  }),
  columnHelper.display({
    id: "actions",
    header: "Actions",
    cell: () => <Actions />,
  }),
];

function Courses() {
  return (
    <div className="px-2 bg-gray-50 min-h-dvh">
      <CommonHeading
        title="Medical Training Courses"
        summary="Manage training programs and curriculum across your consultancy network"
        buttonText="Add New Course"
      />
      <StatBox data={medicalTrainingCourses} />
      <Table<courses>
        title="Course Catalog"
        tableData={courses}
        columns={columns}
      />
    </div>
  );
}

export default Courses;
