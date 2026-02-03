interface DashboardDataItem {
  label: string;
  value: string;
}

interface DashboardBasicInformation {
  title: string;
  data: DashboardDataItem[];
  textStyle: string;
}

function DashboardBasicInformation({
  title,
  data,
  textStyle,
}: DashboardBasicInformation) {
  return (
    <div className="border rounded-2xl p-2 mt-2">
      <p className="font-semibold text-2xl mb-4">{title}</p>
      <div className="">
        {data.map((item) => (
          <div className="flex justify-between gap-2">
            <p>{item.label}</p>
            <p className={`${textStyle} font-semibold`}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardBasicInformation;
