interface QuickAction {
  label: string;
  description: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

interface QuickActionProps {
  data: QuickAction[];
}

function QuickAction({ data }: QuickActionProps) {
  return (
    <>
      {data.map((item) => (
        <div className="flex items-start p-3 gap-3 border border-borderOutline rounded-xl hover:border-teal-400 hover:bg-teal-50 transition-all cursor-pointer grou ">
          <div className="flex items-center justify-center mt-0.5">
            <item.Icon className="h-6 w-6 object-contain" />
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
