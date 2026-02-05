interface Notification {
  notification: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  time: string;
}

interface NotificationsProps {
  data: Notification[];
}

function Notifications({ data }: NotificationsProps) {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="p-3 items-start flex bg-gray-100 rounded-2xl gap-1"
        >
          <div className="flex items-center justify-center mt-1">
            <item.Icon className="h-6 w-6 object-contain" />
          </div>
          <div className="flex-col">
            <p className="text-sm text-gray-800 leading-relaxed">
              {item.notification}
            </p>
            <p className="text-xs mt-0.5 text-gray-600">{item.time}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Notifications;
