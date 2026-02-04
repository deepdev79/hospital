function Notifications({ data }) {
  return (
    <>
      {data.map((item) => (
        <div className="p-1 flex bg-gray-200 rounded-2xl gap-1">
          <div className="flex items-center">
            <img src={item.icon} alt="" className="h-6 w-6 object-contain" />
          </div>
          <div className="flex-col text-sm">
            <p>{item.notification}</p>
            <p className="text-gray-600">{item.time}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Notifications;
