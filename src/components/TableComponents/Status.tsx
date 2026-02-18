interface styles {
  Active: string;
  Completed: string;
  Dropped: string;
}

function Status({ status }) {
  const styles: styles = {
    Active: "bg-green-300 text-green-900",
    Completed: "bg-blue-300 text-blue-900",
    Dropped: "bg-red-300 text-red-900",
  };
  return (
    <p
      className={`${styles[status]} w-3/5 p-0.5 rounded-md text-center text-xs font-semibold whitespace-nowrap overflow-hidden`}
    >
      {status}
    </p>
  );
}

export default Status;
