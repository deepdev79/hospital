type StatusType = "Active" | "Completed" | "Dropped";

interface ProgressBarProps {
  progress: string;
  status: StatusType;
}

const PROGRESSBAR_STYLES: Record<StatusType, string> = {
  Active: "bg-blue-500",
  Completed: "bg-green-500",
  Dropped: "bg-red-400",
};
function ProgressBar({ progress, status }: ProgressBarProps) {
  return (
    <>
      <p className="text-sm mb-1">{progress}</p>
      <div className="w-24 h-1.5 bg-gray-200 rounded-full">
        <div
          className={`h-1.5 rounded-full ${PROGRESSBAR_STYLES[status]}`}
          style={{ width: `${parseInt(progress)}%` }}
        />
      </div>
    </>
  );
}

export default ProgressBar;
