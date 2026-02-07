interface StatBox {
  title: string;
  stat: number;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  iconbg: string;
  iconLines: string;
}

function StatBox({ Icon, title, stat, iconbg, iconLines }: StatBox) {
  return (
    <div className="flex items-center justify-between border border-borderOutline rounded-xl p-4 bg-white">
      <div className=" text-sm">
        <p className="text-charcoal mb-1">{title}</p>
        <p className="text-black text-2xl">{stat}</p>
      </div>
      <div className={`${iconbg} flex items-center rounded-md ml-2 p-2`}>
        <Icon className={`h-6 w-6 object-contain ${iconLines}`} />
      </div>
    </div>
  );
}

export default StatBox;
