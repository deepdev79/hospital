interface QuickAction {
  label: string;
  description: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

interface QuickActionProps {
  data: QuickAction[];
  iconBg: string;
  iconLines: string;
}

function QuickAction({ data, iconBg, iconLines }: QuickActionProps) {
  return (
    <>
      {data.map((item) => (
        <div
          key={item.label}
          className="flex items-start p-3 gap-3 border border-borderOutline rounded-xl hover:border-teal-400 hover:bg-teal-50 transition-all cursor-pointer grou "
        >
          <div
            className={`${iconBg} flex items-center justify-center mt-0.5 p-1.5 rounded-md`}
          >
            <item.Icon className={`${iconLines} h-5 w-5 object-contain`} />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold  text-sm">{item.label}</p>
            <p className="text-charcoal text-xs mt-0.5">{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default QuickAction;
