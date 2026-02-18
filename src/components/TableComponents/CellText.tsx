function CellText({ primary, secondary }) {
  return (
    <>
      <p>{primary}</p>
      <p className="text-xs text-charcoal">{secondary}</p>
    </>
  );
}

export default CellText;
