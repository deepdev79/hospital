interface tData {
  name: string;

  email: string;
  branch: string;
  course: string;
  modules: string;
  trainer: string;
  progress: string;
  status: string;
}

interface CommonTableProp {
  title: string;
  data: tData[];
}

function CommonTable({ title, data = [] }: CommonTableProp) {
  return (
    <div className="m-2 p-2 rounded-md border border-borderOutline">
      <h1>{title}</h1>
      <table className="border-collapse w-full">
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
            <tr key={index} className="border-b border-borderOutline">
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
              <td>{item.progress}</td>
              <td>
                <p className="bg-green-300 text-green-700">{item.status}</p>
              </td>
              <td>
                <p>ccc</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CommonTable;
