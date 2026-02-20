interface CellTextProps {
  primary: string;
  secondary: string;
}

function CellText({ primary, secondary }: CellTextProps) {
  return (
    <>
      <p className="text-black">{primary}</p>
      <p className="text-xs text-charcoal">{secondary}</p>
    </>
  );
}

export default CellText;
