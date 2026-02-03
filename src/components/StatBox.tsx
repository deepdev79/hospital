interface StatBox {
  title: string;
  stat: number;
  icon: string;
}

function StatBox({ icon, title, stat }: StatBox) {
  return (
    <div className="flex border rounded-2xl p-5 gap-2 bg-white">
      <div className="text-charcoal text-sm">
        <p>{title}</p>
        <p className="text-black font-semibold">{stat}</p>
      </div>
      <div className="flex items-center">
        <img src={icon} alt="" className="h-6 w-6 object-contain" />
      </div>
    </div>
  );
}

export default StatBox;
