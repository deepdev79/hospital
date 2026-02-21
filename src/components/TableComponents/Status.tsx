type StatusType = "Active" | "Completed" | "Dropped" | "Pending" | "On Leave";

type modeType = "Hybrid" | "On-site" | "Online" | "Part-time" | "Unavailable";

interface statusProps {
  input: StatusType | modeType | string;
}

const DARK_BLUE = "bg-blue-200 text-blue-900";
const DARK_GREEN = "bg-green-200 text-green-900";
const DARK_ORANGE = "bg-orange-200 text-orange-900";
const DARK_PURPLE = "bg-purple-200 text-purple-900";
const DARK_RED = "bg-red-200 text-red-900";
const COMMON = "bg-blue-50 text-blue-700";

const STATUS_STYLE: Record<StatusType | modeType, string> = {
  Active: DARK_GREEN,
  Completed: DARK_BLUE,
  Dropped: DARK_RED,
  "Part-time": DARK_PURPLE,
  "On Leave": DARK_ORANGE,
  Unavailable: DARK_RED,
  Pending: DARK_ORANGE,
  Hybrid: DARK_BLUE,
  Online: DARK_GREEN,
  "On-site": DARK_PURPLE,
};
function TextDecor({ input }: statusProps) {
  const textStyle = STATUS_STYLE[input] || COMMON;
  return (
    <p
      className={`${textStyle} w-fit py-0.5 px-2 rounded-md text-center text-xs font-semibold whitespace-nowrap overflow-hidden`}
    >
      {input}
    </p>
  );
}

export default TextDecor;
