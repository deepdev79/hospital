import BookIcon from "../assets/BookOutlined.svg?react";
import StarIcon from "../assets/Star.svg?react";
import UserIcon from "../assets/UserOutlined.svg?react";
import PencilIcon from "../assets/Pencil.svg?react";
import BasketIcon from "../assets/Basket.svg?react";
import EyeIcon from "../assets/Eye.svg?react";

import CommonTable from "../components/CommonTable";
import StatBox from "../components/StatBox";

import type { tData } from "../components/CommonTable";
import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import Table from "../components/Table";

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

const columns = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "branch",
    header: "Branch",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "course",
    header: "Course",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "modules",
    header: "Module",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "trainer",
    header: "Trainer",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "progress",
    header: "Progress",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (props) => <p>{props.getValue()}</p>,
  },
];

function Trainers() {
  const [data, setData] = useState<tData[]>(traineesDirectory);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <StatBox data={medicalTrainers} />
      <CommonTable
        title="Trainee Directory"
        data={traineesDirectory}
        icon={ActionIcons}
      />
      <div className="mt-2">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>{header.column.columnDef.header}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-2">
        <Table tableData={traineesDirectory} />
      </div>
    </div>
  );
}

export default Trainers;
