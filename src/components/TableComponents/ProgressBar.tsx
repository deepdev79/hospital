interface styles {
  Active: string;
  Completed: string;
  Dropped: string;
}

function ProgressBar({ progress, status }) {
  const progressBar: styles = {
    Active: "bg-blue-500",
    Completed: "bg-green-500",
    Dropped: "bg-red-400",
  };
  return (
    <>
      <p className="text-sm mb-1">{progress}</p>
      <div className="w-24 h-1.5 bg-gray-200 rounded-full">
        <div
          className={`h-1.5 rounded-full ${progressBar[status]}`}
          style={{ width: `${parseInt(progress)}%` }}
        />
      </div>
    </>
  );
}

export default ProgressBar;
