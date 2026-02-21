import hospitalLogo from "../assets/hospital.svg?react";
import locationLogo from "../assets/LocationOutline.svg?react";
import userLogo from "../assets/UserOutlined.svg?react";
import CommonHeading from "../components/CommonHeading";
import StatBox from "../components/StatBox";
import { createColumnHelper, type ColumnDef } from "@tanstack/react-table";
import CellText from "../components/TableComponents/CellText";
import TextDecor from "../components/TableComponents/Status";
import Actions from "../components/TableComponents/Actions";
import Table from "../components/Table";

const hBranches = [
  {
    title: "Total Branches",
    stat: 4,
    subPara: "Across 3 cities",
    subParaBg: "text-green-600",
    Icon: hospitalLogo,
    iconLines: "fill-green-500",
  },
  {
    title: "Total Trainees",
    stat: 143,
    Icon: userLogo,
    iconLines: "fill-blue-700",
    subPara: "Active enrollment",
    subParaBg: "text-blue-600",
  },
  {
    title: "Average capacity",
    stat: 39,
    Icon: locationLogo,
    iconLines: "fill-orange-700",
    subPara: "Per branch",
    subParaBg: "text-orange-600",
  },
  {
    title: "Active branches",
    stat: 3,
    Icon: hospitalLogo,
    iconLines: "fill-green-300",
    subPara: "Operational",
    subParaBg: "text-green-600",
  },
];

interface hospitals {
  name: string;
  admin: string;
  location: string;
  contact: string;
  email: string;
  trainees: number;
  capacity: number;
  courses: number;
  trainers: number;
  status: string;
}

const hospitals: hospitals[] = [
  {
    name: "Downtown Medical Center",
    admin: "Dr. Lebron James",
    location: "LA, California",
    contact: "555-554-5523",
    email: "downtown@hospital.com",
    trainees: 45,
    capacity: 50,
    courses: 9,
    trainers: 12,
    status: "Active",
  },
  {
    name: "City General Hospital",
    admin: "Dr. Steph Curry",
    location: "Oakland, SF",
    contact: "555-435-234",
    email: "citygeneral@hospital.com",
    trainees: 38,
    capacity: 40,
    courses: 6,
    trainers: 9,
    status: "Active",
  },
  {
    name: "Capital Health Center",
    admin: "Dr. Leo Messi",
    location: "Miami, Florida",
    contact: "555-3324-324",
    email: "capital@hospital.com",
    trainees: 42,
    capacity: 50,
    courses: 11,
    trainers: 9,
    status: "Active",
  },
  {
    name: "Regional Medical Complex",
    admin: "Dr. Neymar",
    location: "New York,NY",
    contact: "555-3242-5324",
    email: "regional@hospital.com",
    trainees: 34,
    capacity: 40,
    courses: 7,
    trainers: 7,
    status: "Pending Setup",
  },
];

const columnHelper = createColumnHelper<hospitals>();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const columns: ColumnDef<hospitals, any>[] = [
  columnHelper.accessor((row) => ({ name: row.name, admin: row.admin }), {
    id: "branch",
    header: "Branch",
    cell: (info) => (
      <CellText
        primary={info.getValue().name}
        secondary={`${info.getValue().admin} years experience`}
      />
    ),
  }),
  columnHelper.accessor("location", {
    header: "Location",
    cell: (info) => <p className="text-charcoal">{info.getValue()}</p>,
  }),
  columnHelper.accessor((row) => ({ contact: row.contact, email: row.email }), {
    id: "contact",
    header: "Contact",
    cell: (info) => (
      <div className="text-sm text-gray-400">
        <p>{info.getValue().contact}</p>
        <p>{info.getValue().email}</p>
      </div>
    ),
  }),
  columnHelper.accessor(
    (row) => ({ trainees: row.trainees, capacity: row.capacity }),
    {
      id: "trainees",
      header: "Trainees",
      cell: (info) => (
        <>
          <p>{info.getValue().trainees}</p>
          <p className="text-gray-400">of {info.getValue().capacity}</p>
        </>
      ),
    },
  ),
  columnHelper.accessor("courses", {
    header: "Courses",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
  columnHelper.accessor("trainers", {
    header: "Trainers",

    cell: (info) => <p>{info.getValue()}</p>,
  }),
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

function HospitalBranches() {
  return (
    <div className="px-2 bg-gray-50 min-h-dvh">
      <CommonHeading
        title="Hospital Branches"
        summary="Manage multiple hospital locations under the consultancy network"
        buttonText="Add New Branch"
      />
      <StatBox data={hBranches} />
      <Table<hospitals>
        title="Branch Network"
        tableData={hospitals}
        columns={columns}
      />
    </div>
  );
}

export default HospitalBranches;
