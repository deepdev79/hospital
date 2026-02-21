import Plus from "../assets/PlusOutlined.svg?react";

interface CommonHeadingProps {
  title: string;
  summary: string;
  buttonText: string;
}

function CommonHeading({ title, summary, buttonText }: CommonHeadingProps) {
  return (
    <div className="flex justify-between px-2 py-9">
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-charcoal leading-none">{summary}</p>
      </div>
      <button className="self-start flex items-center gap-2 bg-[#009282] hover:bg-[#007d6f] text-white px-4 py-3 rounded-lg transition-all shadow-sm">
        <Plus className="h-4 w-4 fill-white" />
        <span className="leading-none font-semibold text-sm tracking-tight">
          {buttonText}
        </span>
      </button>
    </div>
  );
}

export default CommonHeading;
