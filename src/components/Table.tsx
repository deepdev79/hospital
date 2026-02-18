import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

function Table({ tableData }) {
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
  const [data, setData] = useState(tableData);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
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
  );
}

export default Table;
