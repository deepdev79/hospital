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
    <div className="border border-borderOutline rounded-2xl p-6 bg-white mt-2">
      <p className="font-semibold text-lg mb-5">{title}</p>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between gap-3">
            <p className="text-gray-700 text-sm">{item.label}</p>
            <p
              className={`${textStyle} font-semibold px-2  py-1 rounded-md text-xs whitespace-nowrap`}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardBasicInformation;
