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
type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;
interface CommonTableProp {
  title: string;
  data: tData[];
  icon: IconComponent[];
}

interface styles {
  Active: string;
  Completed: string;
  Dropped: string;
}

function CommonTable({ title, data = [], icon }: CommonTableProp) {
  const progressBar: styles = {
    Active: "bg-blue-500",
    Completed: "bg-green-500",
    Dropped: "bg-red-400",
  };
  const styles: styles = {
    Active: "bg-green-300 text-green-900",
    Completed: "bg-blue-300 text-blue-900",
    Dropped: "bg-red-300 text-red-900",
  };
  return (
    <div className="m-2 p-2 rounded-md border border-borderOutline">
      <h1>{title}</h1>
      <table className="border-collapse w-full ">
        <thead className="border-b border-borderOutline">
          <tr className="text-left">
            <th>Trainee</th>
            <th>Branch</th>
            <th>Course</th>
            <th>Trainer</th>
            <th>Progress</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-b border-borderOutline last:border-b-0 mt-1"
            >
              <td>
                <p>{item.name}</p>
                <p className="text-xs text-charcoal">{item.email}</p>
              </td>
              <td>{item.branch}</td>
              <td>
                <p>{item.course}</p>
                <p className="text-xs text-charcoal">{item.modules}</p>
              </td>
              <td>{item.trainer}</td>
              <td>
                <p className="text-sm mb-1">{item.progress}</p>
                <div className="w-24 h-1.5 bg-gray-200 rounded-full">
                  <div
                    className={`h-1.5 rounded-full ${progressBar[item.status]}`}
                    style={{ width: `${parseInt(item.progress)}%` }}
                  />
                </div>
              </td>
              <td className="w-28">
                <p
                  className={`${styles[item.status]} w-3/5 p-0.5 rounded-md text-center text-xs font-semibold whitespace-nowrap overflow-hidden`}
                >
                  {item.status}
                </p>
              </td>
              <td>
                <div className="flex gap-2">
                  {icon.map((IconItem, i) => (
                    <IconItem key={i} className="w-5 h-5 cursor-pointer" />
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CommonTable;
