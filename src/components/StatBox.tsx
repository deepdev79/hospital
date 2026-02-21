interface StatBox {
  title: string;
  stat: number | string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  iconLines: string;
  iconBg?: string;
  subPara?: string;
  subParaBg?: string;
}

interface StatBoxProp {
  data: StatBox[];
}

function StatBox({ data }: StatBoxProp) {
  return (
    <div className="flex flex-wrap gap-5 w-full">
      {data.map((item) => (
        <div className="flex-1 flex items-center justify-between border border-borderOutline rounded-xl p-4 bg-white">
          <div className="ml-2">
            <p className="text-charcoal text-sm">{item.title}</p>
            <p className="text-black text-2xl">{item.stat}</p>
            {item.subPara && (
              <p className={`${item.subParaBg}`}>{item.subPara}</p>
            )}
          </div>
          <div className={`flex items-center rounded-md mr-2 p-2`}>
            <item.Icon className={`h-9 w-9 ${item.iconLines} ${item.iconBg}`} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatBox;
