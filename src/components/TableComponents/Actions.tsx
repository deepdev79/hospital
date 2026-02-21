import BasketIcon from "../../assets/Basket.svg?react";
import EyeIcon from "../../assets/Eye.svg?react";
import PencilIcon from "../../assets/Pencil.svg?react";

const ActionIcons = [PencilIcon, BasketIcon, EyeIcon];

function Actions() {
  return (
    <div className="flex gap-2">
      {ActionIcons.map((IconItem, i) => (
        <IconItem key={i} className="w-5 h-5 cursor-pointer" />
      ))}
    </div>
  );
}

export default Actions;
