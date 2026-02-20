import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,
} from "@tanstack/react-table";

interface TableProps<TData> {
  title: string;
  tableData: TData[];
  columns: ColumnDef<TData>[];
}

function Table<TData>({ title, tableData, columns }: TableProps<TData>) {
  "use no memo";
  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="m-2 p-2 rounded-xl border border-borderOutline bg-white">
      <h2 className="text-xl mt-5 mb-7 ml-3">{title}</h2>
      <table className="border-collapse w-full ml-3">
        <thead className="border-b border-borderOutline">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="text-left">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="py-2">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-b border-borderOutline last:border-b-0 mt-1"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
