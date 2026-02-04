function QuickAction({ data }) {
  return (
    <>
      {data.map((item) => (
        <div className="flex p-2 gap-1 border border-borderOutline rounded-2xl ">
          <div className="flex items-center">
            <img src={item.icon} alt="" className="h-6 w-6 object-contain" />
          </div>
          <div className="flex flex-col text-sm">
            <p className="font-semibold">{item.label}</p>
            <p className="text-charcoal">{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default QuickAction;
