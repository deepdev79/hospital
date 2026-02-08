interface StatBox {
  title: string;
  stat: number;
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
        <div className="flex-1 flex items-center justify-around border border-borderOutline rounded-xl p-4 bg-white">
          <div className="">
            <p className="text-charcoal text-sm">{item.title}</p>
            <p className="text-black text-2xl">{item.stat}</p>
            {item.subPara && (
              <p className={`${item.subParaBg} font-semibold`}>
                {item.subPara}
              </p>
            )}
          </div>
          <div
            className={`${item.iconBg} flex items-center rounded-md ml-2 p-2`}
          >
            <item.Icon className={`h-6 w-6 object-contain ${item.iconLines}`} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatBox;
